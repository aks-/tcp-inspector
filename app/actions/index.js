import { ipcRenderer as ipc } from 'electron'

export const selectInterface = _interface => dispatch => {
  ipc.send('selected-interface', _interface)
  dispatch({ type: 'select-interface' , selectedInterface: _interface })
  ipc.on('tcp-packet', (event, arg) => {
    dispatch({ type: 'new-packet', packet: arg })
  })
}

export const installParser = name => dispatch => {
  ipc.send('install-parser', name)
  ipc.on('installed-parser', () => {
    dispatch({ type: 'add-parser', parser: name })
  })
}

export const removeParser = name => dispatch => {
  ipc.send('remove-parser', name)
  ipc.on('removed-parser', () => {
    dispatch({ type: 'remove-parser', parser: name })
  })
}
