import React from 'react'
import Header from './components/Header'

import { GlobalStyle } from './styles/GlobalStyle'
import { ConfigContext } from './components/ConfigContext'

const isTestnet = false

export class App extends React.Component {
  updateConfig = (newConfig: IAppConfigurationContext) => {
    this.setState(_ => ({ ...newConfig }))
  }

  constructor(props: any) {
    super(props)

    this.state = {
      config: isTestnet
        ? {
            weth: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
            nodeProviderUrl: 'wss://ropsten.infura.io/ws/v3/secret_goes_here',
            mnemonic: '',
            myAddress: 'address_goes_here',
            etherscanApiKey: 'api_key_goes_here',
            isTestnet,
            uniswapRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
            uniswapV2Factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
            uniswapV3Factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
            sushiswapRouter: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
            sushiswapFactory: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
          }
        : {
            weth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            nodeProviderUrl: '',
            mnemonic: '',
            myAddress: '',
            etherscanApiKey: '',
            isTestnet,
            uniswapRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
            uniswapV2Factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
            uniswapV3Factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
            sushiswapRouter: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
            sushiswapFactory: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
          },
      updateConfig: this.updateConfig,
    }
  }

  render() {
    return (
      <div className="App">
        <ConfigContext.Provider value={this.state}>
          <GlobalStyle />
          <Header />
        </ConfigContext.Provider>
      </div>
    )
  }
}
