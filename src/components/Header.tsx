import { Tab } from 'semantic-ui-react'
import ForensicsTab from './ForensicsTab'
import SubscribeTab from './SubscribeTab'
import SecretsTab from './SecretsTab'
import AboutTab from './AboutTab'
import EnvTab from './EnvTab'

const panes = [
  {
    menuItem: 'Forensics 🕵️‍♂️',
    render: () => <ForensicsTab />,
  },
  {
    menuItem: 'Snipe 🔫',
    render: () => <SubscribeTab />,
  },
  {
    menuItem: 'Secrets 🤫',
    render: () => <SecretsTab />,
  },
  {
    menuItem: 'Environment 🌎',
    render: () => <EnvTab />,
  },
  {
    menuItem: 'About ℹ️',
    render: () => <AboutTab />,
  },
]

const Header = () => <Tab menu={{ attached: false }} panes={panes} />
export default Header
