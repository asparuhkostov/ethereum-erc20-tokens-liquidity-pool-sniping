const { getProvider } = require('../infrastructure/nodeInterfaces.js')
const { subscriberMap } = require('./subscriberMap.js')

export async function subscribeToLiquidityProtocol(
  lpp,
  envData,
  stateUpdateFunc
) {
  const { nodeProviderUrl, isTestnet } = envData
  const nodeProvider = getProvider(nodeProviderUrl)
  return subscriberMap[lpp](lpp, nodeProvider, envData, stateUpdateFunc)
}
