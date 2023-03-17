const ethers = require('ethers')
const { parse } = require('node-html-parser')
const axios = require('axios')
const lodash = require('lodash')

const { abis } = require('../infrastructure/abi.js')
const { mainnetConfig } = require('../infrastructure/config.js')
const { testnetConfig } = require('../infrastructure/config_testnet.js')

const { getNonWethTokenInPair } = require('../utils/getNonWethTokenInPair.js')
const { getProvider } = require('../infrastructure/nodeInterfaces.js')

export async function checkForWhales(token0, token1, env) {
  const { isTestnet, nodeProviderUrl, whalesThreshold, weth } = env
  const config = isTestnet ? testnetConfig : mainnetConfig
  const nodeProvider = getProvider(nodeProviderUrl)

  const whalingThreshold = whalesThreshold ? whalesThreshold : 0.05
  let topHolderPercentages

  const nonWethToken = getNonWethTokenInPair(token0, token1, weth)
  const tokenContract = new ethers.Contract(
    nonWethToken,
    abis.erc20,
    nodeProvider
  )
  const tokenDecimals = await tokenContract.decimals()
  const tokenTotalSupply = await tokenContract.totalSupply()
  const topTokenHoldersUrl = `${config.etherscanUrl}/token/generic-tokenholders2?m=normal&a=${nonWethToken}`
  await axios({
    method: 'GET',
    url: topTokenHoldersUrl,
  })
    .then(res => {
      const dom = parse(res.data)
      topHolderPercentages = Array.from(dom.querySelectorAll('tr')).map(
        (e, i) => {
          if (i === 0) {
            return
          }
          const children = e.childNodes
          let number = children[2].textContent.replaceAll(',', '')
          if (number.indexOf('.')) {
            number = number.substring(0, number.indexOf('.'))
          }
          const isContract = lodash
            .get((e = children), '[1].childNodes[0].childNodes[0].rawAttrs', '')
            .includes('Contract')
          return {
            type: isContract ? 'contract' : 'private_address',
            holding: Number(number / tokenTotalSupply) * 10 ** tokenDecimals,
          }
        }
      )
    })
    .catch(e => {
      console.log(e)
    })

  if (typeof topHolderPercentages !== 'object') {
    return false
  } else {
    return topHolderPercentages
      .filter(thp => thp !== undefined)
      .some(
        thp => thp.type === 'private_address' && thp.holding > whalingThreshold
      )
  }
}
