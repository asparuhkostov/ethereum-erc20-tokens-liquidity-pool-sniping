import React, { Fragment } from 'react'
import {
  Container,
  Input,
  Segment,
  Icon,
  Radio,
  Checkbox,
  Button,
  Message,
  Loader,
  Step,
  Header,
} from 'semantic-ui-react'

import { ConfigContext } from './ConfigContext.js'
import { subscribeToLiquidityProtocol } from '../functionality/subscriber/subscribeToLiquidityProtocol.js'
import { test } from '../functionality/subscriber/test.js'

const lpCreationProcessingSteps = [
  { icon: 'eye', title: 'Detected', description: 'Detected new LP creation.' },
  {
    icon: 'heart',
    title: 'Health checks',
    description: 'Running health checks.',
  },
  {
    icon: 'check',
    title: 'Safe',
    description: 'Safety checks passed',
  },
  { icon: 'location arrow', title: 'Router', description: 'Attempting buy-in' },
  {
    icon: 'money',
    title: 'Buy-in',
    description: 'The transaction has been confirmed.',
  },
]

export default class SubscribeTab extends React.Component {
  state: ISubscriptionTabState = {
    isListening: false,
    shouldShowInfo: false,
    subscriptions: [],
    uniswapV2: false,
    uniswapV3: false,
    sushiswap: false,
    autoBuyIn: false,
    whalesThreshold: 0.05,
    minEthInLP: 2,
    buyInEth: 0.01,
    poolEvents: [],
    visibleDetails: {},
  }

  handleInput = (_: any, data: { [key: string]: any }, field: string) => {
    this.setState((state: ISubscriptionTabState) => {
      const newState: { [key: string]: any } = { ...state }
      let value = data.value

      if (field === 'whalesThreshold') {
        if (value >= 100) {
          value = 1
        } else if (value <= 0) {
          value = 0.001
        } else {
          value = value / 100
        }
      }

      newState[field] = value
      return newState
    })
  }

  componentWillUnmount() {
    this.stop()
  }

  stop = () => {
    const { subscriptions } = this.state
    subscriptions.forEach((s: ISubscription) => s.removeAllListeners())
    this.setState((state: ISubscriptionTabState) => {
      return { ...state, isListening: false, subscriptions: [] }
    })
  }

  subscribe = async (conf: IAppConfigurationContext) => {
    this.setState((state: ISubscriptionTabState) => {
      return { ...state, isListening: true }
    })

    const {
      uniswapV2,
      uniswapV3,
      sushiswap,
      autoBuyIn,
      minEthInLP,
      whalesThreshold,
      buyInEth,
    } = this.state

    const lpps = []
    if (uniswapV2) {
      lpps.push('uniswapV2')
    }
    if (uniswapV3) {
      lpps.push('uniswapV3')
    }
    if (sushiswap) {
      lpps.push('sushiswap')
    }

    const updateCallback = (update: IPoolEvent) =>
      this.setState((state: ISubscriptionTabState) => {
        const newVisibleDetails = { ...state.visibleDetails }
        newVisibleDetails[update.id] = false
        return {
          ...state,
          poolEvents: [...state.poolEvents, update],
          visibleDetails: newVisibleDetails,
        }
      })

    const subscriptions = await Promise.all(
      lpps.map(async lpp => {
        let subscription

        const isManualTest = false
        if (isManualTest) {
          subscription = await test(
            lpp,
            {
              ...conf.config,
              automaticBuyIn: autoBuyIn,
              minEthInLP,
              whalesThreshold,
              buyInEth,
            },
            updateCallback
          )
        } else {
          subscription = await subscribeToLiquidityProtocol(
            lpp,
            {
              ...conf.config,
              automaticBuyIn: autoBuyIn,
              minEthInLP,
              whalesThreshold,
              buyInEth,
            },
            updateCallback
          )
        }
        return subscription
      })
    )

    this.setState((state: ISubscriptionTabState) => {
      return { ...state, subscriptions }
    })
  }

  toggleShowInfo = () => {
    const { shouldShowInfo } = this.state
    this.setState(state => {
      return { ...state, shouldShowInfo: !shouldShowInfo }
    })
  }

  toggleLiquidityProtocolSubscription = (lpp: string) => {
    const newState: { [key: string]: any } = this.state
    newState[lpp] = !newState[lpp]
    this.setState(newState)
  }

  toggleAutoBuyIn = () => {
    const { autoBuyIn } = this.state
    this.setState(state => {
      return { ...state, autoBuyIn: !autoBuyIn }
    })
  }

  toggleVisibleDetails = (id: string) => {
    this.setState((state: ISubscriptionTabState) => {
      const newVisibleDetails = { ...state.visibleDetails }
      newVisibleDetails[id] = !newVisibleDetails[id]
      return { ...state, visibleDetails: newVisibleDetails }
    })
  }

  render() {
    const {
      isListening,
      shouldShowInfo,
      subscriptions,
      poolEvents,
      visibleDetails,
      autoBuyIn,
    } = this.state
    return (
      <ConfigContext.Consumer>
        {conf => (
          <Fragment>
            <Container>
              <Segment>
                <Message>
                  <Message.Header>
                    Sniping{' '}
                    <Icon
                      name="info"
                      onClick={() => this.toggleShowInfo()}
                      style={{ cursor: 'pointer' }}
                    />
                  </Message.Header>
                  {shouldShowInfo && (
                    <Message.List>
                      <Message.Item>
                        {' '}
                        You can subscribe to several liquidity protocols'
                        factory contracts. Upon a new LP creation event,
                        DragunovETH will run the enabled checks for you.
                      </Message.Item>
                      <Message.Item>
                        If the LP matches the criteria you set below,
                        DragunovETH will list it below, and if you have enabled
                        the auto buy-in feature, also enter a position on your
                        behalf.
                      </Message.Item>
                      <Message.Item>
                        If you leave this tab, the subscription will be cut and
                        the contents of the screen will be cleared. DragunovETH
                        does not store any information on purpose.
                      </Message.Item>
                    </Message.List>
                  )}
                </Message>
                <Checkbox
                  label="Uniswap V2 🦄"
                  style={{ marginRight: '1.5em' }}
                  disabled={isListening}
                  onClick={() =>
                    this.toggleLiquidityProtocolSubscription('uniswapV2')
                  }
                />
                <Checkbox
                  label="Uniswap V3 🦄"
                  style={{ marginRight: '1.5em' }}
                  disabled={isListening}
                  onClick={() =>
                    this.toggleLiquidityProtocolSubscription('uniswapV3')
                  }
                />
                <Checkbox
                  label="Sushiswap 🍣"
                  style={{ marginRight: '1.5em' }}
                  disabled={isListening}
                  onClick={() =>
                    this.toggleLiquidityProtocolSubscription('sushiswap')
                  }
                />
                <br />
                <br />
                <Input
                  type="number"
                  fluid
                  label="Min. ETH in LP"
                  placeholder="(default 2.00) How much ETH the LP should have (at least)."
                  onChange={(e, data) =>
                    this.handleInput(e, data, 'minEthInLP')
                  }
                  disabled={isListening}
                />
                <Input
                  type="number"
                  fluid
                  min="1"
                  max="100"
                  label="Whale(s) size"
                  placeholder="(default 5%) Maximum % of the LP that one address can own."
                  onChange={(e, data) =>
                    this.handleInput(e, data, 'whalesThreshold')
                  }
                  disabled={isListening}
                />
                <br />
                <br />
                <Radio
                  label="Auto buy-in 💸"
                  toggle
                  onClick={() => this.toggleAutoBuyIn()}
                  disabled={isListening}
                />
                <br />
                <br />
                <Input
                  type="number"
                  fluid
                  label="ETH to buy in with"
                  placeholder="(default 0.01)"
                  onChange={(e, data) => this.handleInput(e, data, 'buyInEth')}
                  disabled={isListening || !autoBuyIn}
                />
                <br />
                <br />
                {isListening ? (
                  <Button color="red" onClick={() => this.stop()}>
                    Stop
                  </Button>
                ) : (
                  <Button color="green" onClick={() => this.subscribe(conf)}>
                    Subscribe
                  </Button>
                )}
              </Segment>
            </Container>
            <br />
            <br />

            {poolEvents.map((pe: IPoolEvent) => {
              const { tokenName, logs, id } = pe
              const url = `https://${
                conf?.config?.isTestnet ? 'ropsten.' : ''
              }etherscan.io/token/${id}`
              return (
                <Segment>
                  <Header as="h3">
                    {tokenName}
                    <br />
                    <br />
                    <a>
                      <Icon
                        name="copy"
                        onClick={() => {
                          alert('Copied to clipboard.')
                          navigator.clipboard.writeText(url)
                        }}
                        style={{ cursor: 'pointer' }}
                      />
                    </a>
                    <a>
                      <Icon
                        name="info"
                        style={{ cursor: 'pointer' }}
                        onClick={() => this.toggleVisibleDetails(id)}
                      />
                    </a>
                  </Header>
                  {visibleDetails[id] ? (
                    <Step.Group
                      items={lpCreationProcessingSteps.map((l, i) => {
                        return {
                          ...l,
                          active: i === logs.length - 1,
                          disabled: i > logs.length - 1,
                        }
                      })}
                    />
                  ) : null}
                </Segment>
              )
            })}

            {subscriptions.length > 0 ? (
              <Message>
                <Message.Header>
                  Listening... <Loader />
                </Message.Header>
              </Message>
            ) : null}
          </Fragment>
        )}
      </ConfigContext.Consumer>
    )
  }
}
