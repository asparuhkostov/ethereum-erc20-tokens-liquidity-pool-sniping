const ethers = require('ethers')
const { abis } = require('../infrastructure/abi.js')

const { getFactory } = require('../infrastructure/infrastructure.js')
const { pairCreationHandler } = require('./pairCreationHandler.js')
const { getNonWethTokenInPair } = require('../utils/getNonWethTokenInPair.js')

async function getEventData(lpp, token0, token1, weth, nodeProvider) {
  const nonWethToken = getNonWethTokenInPair(token0, token1, weth)
  const tokenContract = new ethers.Contract(
    nonWethToken,
    abis.erc20,
    nodeProvider
  )
  const tokenName = await tokenContract.name()
  const eventData = {
    id: nonWethToken,
    checks: [],
    protocol: lpp,
    logs: ['Detected LP creation 👀'],
    tokenName,
  }
  return eventData
}

export const subscriberMap = {
  uniswapV2: (lpp, nodeProvider, envData, updateStateFunc) => {
    const { uniswapV2Factory, weth } = envData
    let factory = getFactory(lpp, uniswapV2Factory, nodeProvider)

    return factory.on('PairCreated', async (token0, token1, pairAddress) => {
      let eventData = await getEventData(
        lpp,
        token0,
        token1,
        weth,
        nodeProvider
      )
      const res = await pairCreationHandler(
        lpp,
        {
          token0,
          token1,
          contractAddress: pairAddress,
        },
        envData,
        eventData
      )
      updateStateFunc(res)
    })
  },
  uniswapV3: (lpp, nodeProvider, envData, updateStateFunc) => {
    const { uniswapV3Factory, weth } = envData
    let factory = getFactory(lpp, uniswapV3Factory, nodeProvider)

    return factory.on(
      'PoolCreated',
      async (token0, token1, fee, tickSpacing, poolAddress) => {
        let eventData = await getEventData(
          lpp,
          token0,
          token1,
          weth,
          nodeProvider
        )
        const res = await pairCreationHandler(
          lpp,
          {
            token0,
            token1,
            fee,
            tickSpacing,
            contractAddress: poolAddress,
          },
          envData,
          eventData
        )
        updateStateFunc(res)
      }
    )
  },
  sushiswap: (lpp, nodeProvider, envData, updateStateFunc) => {
    const { sushiswapFactory, weth } = envData
    let factory = getFactory(lpp, sushiswapFactory, nodeProvider)

    return factory.on('PairCreated', async (token0, token1, pairAddress) => {
      let eventData = await getEventData(
        lpp,
        token0,
        token1,
        weth,
        nodeProvider
      )
      const res = await pairCreationHandler(
        lpp,
        {
          token0,
          token1,
          contractAddress: pairAddress,
        },
        envData,
        eventData
      )
      updateStateFunc(res)
    })
  },
}
