'use strict'

const { app, BrowserWindow, ipcMain } = require('electron')
const getTCPPackets = require('./lib/getTcpPackets')
const { installModule, removeModule } = require('./lib/manageModules')

let win

app.on('ready', () => {
  win = new BrowserWindow({ width: 800, height: 600 })
  win.loadURL(`file://${__dirname}/index.html`)
  win.webContents.openDevTools()
})

app.on('window-all-closed', () => app.quit())

ipcMain.on('selected-interface', (event, arg) => {
  getTCPPackets(arg, data => {
    event.sender.send('tcp-packet', data)
  })
})

ipcMain.on('install-parser', (event, arg) => {
  installModule(arg)
    .then(() => {
    })
    .catch((e) => console.log)
})
