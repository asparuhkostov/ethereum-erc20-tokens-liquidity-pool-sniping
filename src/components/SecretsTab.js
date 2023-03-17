import { useState } from 'react'
import { Button, Container, Input, Icon, Message } from 'semantic-ui-react'

import { ConfigContext } from './ConfigContext.js'

const SecretsTab = () => {
  const [isEditingEnabled, setIsEditingEnabled] = useState(false)
  function handleInput(_, data, field, conf) {
    const newConfig = { ...conf }
    newConfig.config[field] = data.value
    conf.updateConfig(newConfig)
  }
  return (
    <ConfigContext.Consumer>
      {conf => (
        <Container>
          <Message warning>
            <Message.Header>Important</Message.Header>
            <ul>
              <li>
                These values are required for the testing and sniping
                functionality to work.
              </li>
              <li>
                The wallet mnemonic phrase is only required if you intend to
                enable the auto buy-in feature.
              </li>
              <li>
                The values are only stored in-memory during your session, and
                because of that need to be filled out every time you start
                DragunovETH.
              </li>
            </ul>
            <br />
            <Button
              onClick={() => setIsEditingEnabled(!isEditingEnabled)}
              icon
              color={!isEditingEnabled ? 'green' : 'red'}
            >
              <Icon name={isEditingEnabled ? 'lock open' : 'lock'}></Icon>
            </Button>
          </Message>
          <Input
            fluid
            label="Node provider websocket"
            placeholder="E.g Infura: wss://mainnet.infura.io/ws/v3/you_project_id"
            onChange={(e, data) =>
              handleInput(e, data, 'nodeProviderUrl', conf)
            }
            disabled={!isEditingEnabled}
            type="password"
          />
          <Input
            fluid
            label="Address"
            placeholder="Your wallet's address"
            onChange={(e, data) => handleInput(e, data, 'myAddress', conf)}
            disabled={!isEditingEnabled}
            type="password"
          />
          <Input
            fluid
            label="Seed"
            placeholder="The 12 words for authentication"
            onChange={(e, data) => handleInput(e, data, 'mnemonic', conf)}
            disabled={!isEditingEnabled}
            type="password"
          />
          <Input
            fluid
            label="Etherscan"
            placeholder="Your Etherscan API key"
            onChange={(e, data) =>
              handleInput(e, data, 'etherscanApiKey', conf)
            }
            disabled={!isEditingEnabled}
            type="password"
          />
        </Container>
      )}
    </ConfigContext.Consumer>
  )
}

export default SecretsTab
