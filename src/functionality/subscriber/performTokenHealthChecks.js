const {
  verifyMinWETHAmountInLP,
} = require('../risk_checks/verifyMinWETHAmountInLP')
const { checkForHoneypot } = require('../risk_checks/checkForHoneypot')
const { checkForWhales } = require('../risk_checks/checkForWhales')

export async function performTokenHealthChecks(lpp, creationData, envData) {
  const { token0, token1 } = creationData

  const honeypotTest = await checkForHoneypot(token0, token1, envData)
  const whaleTest = await checkForWhales(token0, token1, envData)
  const minETHLiquidityTest = await verifyMinWETHAmountInLP(
    lpp,
    creationData,
    envData
  )

  return [honeypotTest, whaleTest, minETHLiquidityTest].some(cr => cr !== false)
}
