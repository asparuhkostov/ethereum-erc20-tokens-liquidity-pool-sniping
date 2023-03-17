const ethers = require('ethers')
const { abis } = require('../infrastructure/abi.js')
const { getProvider } = require('../infrastructure/nodeInterfaces.js')

const { pairCreationHandler } = require('./pairCreationHandler.js')

const testAddresses = {
  uniswapV2: {
    token: '0x81442dd3C98d6e2BF856182E28180c264181C6dD',
    contract: '0x7180c1747f82F426EdaEFbFc0226B0989A9561f9',
    // token: "0x5a13c6e502AdA3D1F6f48f331529b3Eda0Ba4bD3",
    // contract: "0x180eB467c71B09389655bf11EbB8F3d7aab41B08",
  },
  uniswapV3: {
    token: '',
    contract: '0xe197dbd6f9e3f91691b5716ce6cb3d2e9ba47e08',
  },
  sushiswap: {
    token: '',
    contract: '0x6ff78ed2e12c2959a865f08f32a42a8a42d750c6',
  },
}

export async function test(lpp, envData, func) {
  const token0 = testAddresses[lpp].token
  const contractAddress = testAddresses[lpp].contract
  const token1 = '0xc778417E063141139Fce010982780140Aa0cD5Ab'

  const { nodeProviderUrl, isTestnet } = envData
  const nodeProvider = getProvider(nodeProviderUrl)
  const tokenContract = new ethers.Contract(token0, abis.erc20, nodeProvider)
  const tokenName = await tokenContract.name()
  const eventData = {
    id: token0,
    logs: ['detected'],
    tokenName,
  }

  let res

  if (lpp === 'uniswapV2') {
    res = await pairCreationHandler(
      lpp,
      {
        token0,
        token1,
        contractAddress,
      },
      envData,
      eventData
    )
  }
  if (lpp === 'uniswapV3') {
    res = await pairCreationHandler(
      lpp,
      {
        token0,
        token1,
        contractAddress,
      },
      envData,
      eventData
    )
  }
  if (lpp === 'sushiswap') {
    res = await pairCreationHandler(
      lpp,
      {
        token0,
        token1,
        contractAddress,
      },
      envData,
      eventData
    )
  }

  func(res, {}, lpp)
  return {
    removeAllListeners: () => console.log('Stopped all event listeners.'),
  }
}
