const ethers = require('ethers')

export function getProvider(nodeProviderUrl) {
  const nodeProvider = new ethers.providers.WebSocketProvider(nodeProviderUrl)
  return nodeProvider
}

export function getAccount(mnemonic, nodeProvider) {
  const wallet = ethers.Wallet.fromMnemonic(mnemonic)
  const myAccount = wallet.connect(nodeProvider)
  return myAccount
}
