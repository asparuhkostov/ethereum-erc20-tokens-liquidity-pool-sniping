const ethers = require('ethers')
const { abis } = require('../infrastructure/abi.js')
const { getProvider } = require('../infrastructure/nodeInterfaces.js')

export async function verifyMinWETHAmountInLP(lpp, creationData, envData) {
  const { contractAddress } = creationData
  const { nodeProviderUrl, weth, minEthInLP } = envData
  const nodeProvider = getProvider(nodeProviderUrl)

  // false would mean that the check passes,
  // i.e it's false that the check does not pass
  let checkValue = false
  let pair

  function doLiquidityCheck(pt0, pt1, pairReserves) {
    let wethInPair
    if (pt0 === weth) {
      wethInPair = 0
    }
    if (pt1 === weth) {
      wethInPair = 1
    }
    if (wethInPair === 0 || wethInPair === 1) {
      if (
        pairReserves[`reserve${wethInPair}`] >=
        ethers.utils.parseUnits(`${minEthInLP}`, 'ether')
      ) {
        return false
      } else {
        return true
      }
    }
    return false
  }

  if (lpp === 'uniswapV2') {
    pair = new ethers.Contract(contractAddress, abis[lpp].pair, nodeProvider)
    checkValue = doLiquidityCheck(
      await pair.token0(),
      await pair.token1(),
      await pair.getReserves()
    )
  }
  if (lpp === 'uniswapV3') {
    const pool = new ethers.Contract(
      contractAddress,
      abis[lpp].pool,
      nodeProvider
    )
    const token0Contract = new ethers.Contract(
      await pool.token0(),
      abis.erc20,
      nodeProvider
    )
    const token1Contract = new ethers.Contract(
      await pool.token1(),
      abis.erc20,
      nodeProvider
    )
    checkValue = doLiquidityCheck(await pool.token0(), await pool.token1(), {
      reserve0: await token0Contract.balanceOf(contractAddress),
      reserve1: await token1Contract.balanceOf(contractAddress),
    })
  }
  if (lpp === 'sushiswap') {
    pair = new ethers.Contract(contractAddress, abis[lpp].pair, nodeProvider)
    checkValue = doLiquidityCheck(
      await pair.token0(),
      await pair.token1(),
      await pair.getReserves()
    )
  }

  return checkValue
}
