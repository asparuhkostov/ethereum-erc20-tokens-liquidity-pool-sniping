const ethers = require('ethers')
const { abis } = require('../infrastructure/abi.js')

export function getFactory(lpp, factoryAddress, nodeProvider) {
  const factory = new ethers.Contract(
    factoryAddress,
    abis[lpp].factory,
    nodeProvider
  )
  return factory
}
