const { getNonWethTokenInPair } = require('../utils/getNonWethTokenInPair.js')
const { mainnetConfig } = require('../infrastructure/config.js')
const { testnetConfig } = require('../infrastructure/config_testnet.js')

const lodash = require('lodash')
const axios = require('axios')

const redFlagKeywords = [
  'blacklist',
  'whitelist',
  'safemath',
  'ming',
  'function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool)',
]

async function doBlacklistKeywordsCheck(
  token0,
  token1,
  etherscanApiKey,
  config,
  weth
) {
  const nonWethToken = getNonWethTokenInPair(token0, token1, weth)
  let contractSourceCode
  let contractSourceUrl = `${config.etherscanApiUrl}/api?`
  contractSourceUrl += 'module=contract'
  contractSourceUrl += '&action=getsourcecode'
  contractSourceUrl += `&address=${nonWethToken}`
  contractSourceUrl += `&apikey=${etherscanApiKey}`

  await axios({
    url: contractSourceUrl,
    method: 'GET',
  })
    .then(res => {
      contractSourceCode = lodash.get(res.data, 'result[0].SourceCode')
    })
    .catch(e => {
      console.log(e)
    })

  if (contractSourceCode) {
    return redFlagKeywords
      .map(e => contractSourceCode.indexOf(e))
      .some(e => e !== -1)
  } else {
    return false
  }
}

export async function checkForHoneypot(token0, token1, secrets) {
  const { etherscanApiKey, isTestnet, weth } = secrets
  const config = isTestnet ? testnetConfig : mainnetConfig

  return await doBlacklistKeywordsCheck(
    token0,
    token1,
    etherscanApiKey,
    config,
    weth
  )
}
