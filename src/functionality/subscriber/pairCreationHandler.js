const { enterPosition } = require('../broker/enterPosition.js')
const { performTokenHealthChecks } = require('./performTokenHealthChecks.js')

export async function pairCreationHandler(
  lpp,
  creationData,
  envData,
  eventData
) {
  const { automaticBuyIn } = envData
  let hasFailingChecks

  if (eventData) {
    eventData.logs.push('health_checks_running')
  }
  try {
    hasFailingChecks = await performTokenHealthChecks(
      lpp,
      creationData,
      envData
    )
  } catch (e) {
    return eventData
  }

  if (!hasFailingChecks) {
    if (eventData) {
      eventData.logs.push('health_checks_passed')
    }
    if (automaticBuyIn && ['uniswapV2', 'sushiswap'].includes(lpp)) {
      if (eventData) {
        eventData.logs.push('position_attempt')
      }
      try {
        const receipt = await enterPosition(lpp, creationData, envData)
        if (eventData && receipt) {
          eventData.logs.push('transaction_confirmed')
        }
      } catch (e) {
        return eventData
      }
    }
    return eventData
  } else {
    return eventData
  }
}
