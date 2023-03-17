const {
  Fetcher,
  WETH,
  Route,
  Trade,
  TokenAmount,
  TradeType,
  Percent,
  ChainId,
} = require('@uniswap/sdk')
const ethers = require('ethers')

async function getParams(infra, env) {
  const { provider } = infra
  const { buyInEth, chainId, tokenOutAddress } = env
  const tokenOut = await Fetcher.fetchTokenData(
    chainId,
    tokenOutAddress,
    provider
  )
  const weth = WETH[chainId]
  const pair = await Fetcher.fetchPairData(tokenOut, weth, provider)
  const route = new Route([pair], weth)

  const trade = new Trade(
    route,
    new TokenAmount(weth, ethers.utils.parseEther(buyInEth)),
    TradeType.EXACT_INPUT
  )

  const slippageTolerance = new Percent('50', '10000') // 0.5%
  const amountOutMin = trade.minimumAmountOut(slippageTolerance).raw
  const amountOutMinHex = ethers.BigNumber.from(
    amountOutMin.toString()
  ).toHexString()

  const path = [weth.address, tokenOutAddress]
  const deadline = Math.floor(Date.now() / 1000) + 60 * 5 // 5 mins time
  const inputAmount = trade.inputAmount.raw
  const inputAmountHex = ethers.BigNumber.from(
    inputAmount.toString()
  ).toHexString()

  return {
    amountOutMinHex,
    path,
    deadline,
    inputAmountHex,
  }
}

async function performTrade(infra, env, params) {
  const { provider, account } = infra
  const { exchangeAddress } = env
  const { amountOutMinHex, path, deadline, inputAmountHex } = params
  const uniswap = new ethers.Contract(
    exchangeAddress,
    [
      'function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)',
    ],
    account
  )

  const gasPrice = await provider.getGasPrice()
  return await uniswap.swapExactETHForTokens(
    amountOutMinHex,
    path,
    account.address,
    deadline,
    {
      value: inputAmountHex,
      gasPrice: gasPrice.toHexString(),
      gasLimit: ethers.BigNumber.from(500000).toHexString(),
    }
  )
}

async function doSwap(
  provider,
  account,
  tokenOutAddress,
  exchangeAddress,
  buyInEth,
  chainId
) {
  const { amountOutMinHex, path, deadline, inputAmountHex } = await getParams(
    { provider },
    { buyInEth, tokenOutAddress, chainId }
  )

  const tx = performTrade(
    { provider, account },
    { exchangeAddress },
    { amountOutMinHex, path, deadline, inputAmountHex }
  )

  return tx
}

export async function sushiswap(data) {
  const {
    tokenOut,
    buyInEth,
    provider,
    myAccount,
    isTestnet,
    sushiswapRouter,
  } = data
  const chainId = isTestnet ? ChainId.ROPSTEN : ChainId.MAINNET

  return await doSwap(
    provider,
    myAccount,
    tokenOut,
    sushiswapRouter,
    buyInEth,
    chainId
  )
}
