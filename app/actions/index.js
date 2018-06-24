import { ipcRenderer as ipc } from 'electron'

export const selectInterface = _interface => {
  ipc.send('asynchronous-message', _interface)
  ipc.on('asynchronous-reply', (event, arg) => {
    console.log(arg)
  })
}
