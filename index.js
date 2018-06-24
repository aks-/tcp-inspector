'use strict'

const { app, BrowserWindow, ipcMain } = require('electron')
const getTCPPackets = require('./lib/getTcpPackets')

let win

app.on('ready', () => {
  win = new BrowserWindow({ width: 800, height: 600 })
  win.loadURL(`file://${__dirname}/index.html`)
  win.webContents.openDevTools()
})

app.on('window-all-closed', () => app.quit())

ipcMain.on('asynchronous-message', (event, arg) => {

  getTCPPackets(arg, data => {
    event.sender.send('asynchronous-reply', 'pong')
  })

})
