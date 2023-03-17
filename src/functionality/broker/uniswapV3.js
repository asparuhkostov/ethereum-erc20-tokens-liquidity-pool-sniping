const ethers = require('ethers')

const { abis } = require('../infrastructure/abi.js')

export async function uniswapV3(data) {
  const {
    tokenIn,
    tokenOut,
    contractAddress,
    router,
    nodeProvider,
    myAddress,
  } = data
  const pool = new ethers.Contract(
    contractAddress,
    abis.uniswapV3.pool,
    nodeProvider
  )
  const quantity = ethers.utils.parseUnits('0.05', 'ether')
  const deadline = Math.floor(Date.now() / 1000) + 900
  const params = {
    tokenIn,
    tokenOut,
    fee: await pool.fee(),
    recipient: myAddress,
    deadline,
    amountIn: quantity,
    amountOutMinimum: 0,
    sqrtPriceLimitX96: 0,
  }
  const tx = await router.exactInputSingle(params)
  const receipt = await tx.wait()
  return receipt
}
