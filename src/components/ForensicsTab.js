import React, { Fragment } from 'react'
import { Button, Container, Input, Message } from 'semantic-ui-react'

import { ConfigContext } from './ConfigContext.js'

export default class ForensicsTab extends React.Component {
  state = {
    tokenToCheck: '',
    results: [],
    error: false,
  }

  triggerTest = async function (conf) {
    const { tokenToCheck } = this.state
    this.setState(state => {
      return { ...state, isLoading: true, results: [], error: false }
    })
    const { weth } = conf.config
    let whalesCheck = false
    let honeypotCheck = false
    try {
      whalesCheck = await window.Main.checkForWhales({
        token0: tokenToCheck,
        token1: weth,
        secrets: conf.config,
      })
      honeypotCheck = await window.Main.checkForHoneypot({
        token0: tokenToCheck,
        token1: weth,
        secrets: conf.config,
      })
    } catch (e) {
      this.setState({
        isLoading: false,
        results: [],
        error: true,
      })
      return
    }

    this.setState(state => {
      return {
        ...state,
        isLoading: false,
        results: [
          ...state.results,
          {
            header: 'Whales 🐳',
            message:
              'Is there anybody who owns too much of the token? E.g the creators.',
            value: whalesCheck !== false,
          },
          {
            header: 'Honeypot 🐝',
            message:
              'Are there signs of functionality in the smart contract that would block sales of the token?',
            value: honeypotCheck !== false,
          },
        ],
        error: false,
      }
    })
  }

  handleInput = (_, data) => {
    this.setState(_ => {
      return { isLoading: false, results: [], tokenToCheck: data.value }
    })
  }

  render() {
    const { isLoading, results, error } = this.state

    return (
      <Container>
        <ConfigContext.Consumer>
          {conf => (
            <Fragment>
              <Input
                fluid
                placeholder="Token address: 0x..."
                onChange={this.handleInput}
                disabled={isLoading}
                action={() => (
                  <Button
                    onClick={() => this.triggerTest(conf)}
                    disabled={isLoading}
                    loading={isLoading}
                    color="blue"
                  >
                    Investigate
                  </Button>
                )}
              />
              {error && (
                <Message error>
                  Error while trying to run tests. Are you sure this is an
                  address leading to an ERC20-standard smart contract?
                </Message>
              )}
              {results.map((r, i) => (
                <Message key={i}>
                  <Message.Header>
                    {r.header} : {r.value === false ? 'NO' : 'YES'}
                  </Message.Header>
                  <p>{r.message}</p>
                </Message>
              ))}
            </Fragment>
          )}
        </ConfigContext.Consumer>
      </Container>
    )
  }
}
