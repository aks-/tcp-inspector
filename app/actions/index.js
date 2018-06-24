import { ipcRenderer as ipc } from 'electron'

export const selectInterface = _interface => dispatch => {
  ipc.send('selected-interface', _interface)
  dispatch({ type: 'select-interface' , selectedInterface: _interface })
  ipc.on('tcp-packet', (event, arg) => {
    console.log(arg)
  })
}

export const installParser = name => dispatch => {
  ipc.send('install-parser', name)
  ipc.on('installed-parser', () => {
    console.log('installed parser')
  })
}

export const removeParser = name => dispatch => {
  ipc.send('remove-parser', name)
  ipc.on('removed-parser', () => {
    console.log('installed parser')
  })
}
