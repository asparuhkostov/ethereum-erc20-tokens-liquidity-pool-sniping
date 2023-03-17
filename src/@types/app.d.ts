interface AppConfiguration {
  weth: string
  nodeProviderUrl: string
  mnemonic: string
  myAddress: string
  etherscanApiKey: string
  isTestnet: boolean
}

interface IAppConfigurationContext {
  config: AppConfiguration
  updateConfig(): any
}

interface ISubscriptionTabState {
  isListening: boolean
  shouldShowInfo: boolean
  subscriptions: any[]
  uniswapV2: boolean
  uniswapV3: boolean
  sushiswap: boolean
  autoBuyIn: boolean
  whalesThreshold: number
  minEthInLP: number
  buyInEth: number
  poolEvents: any[]
  visibleDetails: { [key: string]: boolean | undefined }
}

interface ISubscription {
  removeAllListeners(): any
}

interface IPoolEvent {
  id: string
  tokenName: string
  logs: any[]
}
