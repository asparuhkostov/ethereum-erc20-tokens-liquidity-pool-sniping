import { useState } from 'react'
import { Button, Container, Input, Icon, Message } from 'semantic-ui-react'

import { ConfigContext } from './ConfigContext.js'

const EnvTab = () => {
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
            <p>
              Only change the following if you are certain that Uniswap or
              Sushiswap have changed their factory or router addresses.
              <br />
              <br />
              The default values, which are the current active addresses at the
              time of this software's release (and which are used by default)
              are shown below.
            </p>
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
            label="Uniswap router"
            placeholder="0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
            onChange={(e, data) => handleInput(e, data, 'uniswapRouter', conf)}
            disabled={!isEditingEnabled}
            type="password"
          />
          <Input
            fluid
            label="Uniswap V2 factory"
            placeholder="0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"
            onChange={(e, data) =>
              handleInput(e, data, 'uniswapV2Factory', conf)
            }
            disabled={!isEditingEnabled}
            type="password"
          />
          <Input
            fluid
            label="Uniswap V3 factory"
            placeholder="0x1F98431c8aD98523631AE4a59f267346ea31F984"
            onChange={(e, data) =>
              handleInput(e, data, 'uniswapV3Factory', conf)
            }
            disabled={!isEditingEnabled}
            type="password"
          />
          <Input
            fluid
            label="Sushiswap router"
            placeholder="0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F"
            onChange={(e, data) =>
              handleInput(e, data, 'sushiswapRouter', conf)
            }
            disabled={!isEditingEnabled}
            type="password"
          />
          <Input
            fluid
            label="Sushiswap factory"
            placeholder="0xc35DADB65012eC5796536bD9864eD8773aBc74C4"
            onChange={(e, data) =>
              handleInput(e, data, 'sushiswapFactory', conf)
            }
            disabled={!isEditingEnabled}
            type="password"
          />
          <br />
        </Container>
      )}
    </ConfigContext.Consumer>
  )
}

export default EnvTab
