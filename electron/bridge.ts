import { contextBridge, ipcRenderer } from 'electron'
import { checkForHoneypot } from '../src/functionality/risk_checks/checkForHoneypot'
import { checkForWhales } from '../src/functionality/risk_checks/checkForWhales'

interface ICheckParams {
  token0: string
  token1: string
  secrets: any
}

export const api = {
  sendMessage: (message: string) => {
    ipcRenderer.send('message', message)
  },

  checkForWhales: async (data: ICheckParams) => {
    const { token0, token1, secrets } = data
    const res = await checkForWhales(token0, token1, secrets)
    return res
  },

  checkForHoneypot: async (data: ICheckParams) => {
    const { token0, token1, secrets } = data
    const res = await checkForHoneypot(token0, token1, secrets)
    return res
  },

  on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (_, data) => callback(data))
  },
}

contextBridge.exposeInMainWorld('Main', api)
