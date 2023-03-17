const { uniswapV2 } = require('./uniswapV2.js')
// const { uniswapV3 } = require("./uniswapV3.js");
const { sushiswap } = require('./sushiswap.js')

const {
  getAccount,
  getProvider,
} = require('../infrastructure/nodeInterfaces.js')

export async function enterPosition(lpp, creationData, envData) {
  const { token0, token1 } = creationData
  const {
    weth,
    myAddress,
    nodeProviderUrl,
    mnemonic,
    isTestnet,
    buyInEth,
    uniswapV2Router,
    sushiswapRouter,
  } = envData
  const nodeProvider = getProvider(nodeProviderUrl)
  const myAccount = getAccount(mnemonic, nodeProvider)

  let tokenIn, tokenOut
  if (token0 === weth) {
    tokenIn = token0
    tokenOut = token1
  }
  if (token1 === weth) {
    tokenIn = token1
    tokenOut = token0
  }

  if (lpp === 'uniswapV2') {
    return await uniswapV2({
      tokenIn,
      tokenOut,
      myAddress,
      buyInEth: String(buyInEth),
      myAccount,
      provider: nodeProvider,
      isTestnet,
      uniswapV2Router,
    })
  }
  if (lpp === 'uniswapV3') {
    return
  }
  if (lpp === 'sushiswap') {
    return await sushiswap({
      tokenIn,
      tokenOut,
      myAddress,
      buyInEth: String(buyInEth),
      myAccount,
      provider: nodeProvider,
      isTestnet,
      sushiswapRouter,
    })
  }
}
