'use strict'

const { app, BrowserWindow, ipcMain } = require('electron')
const batch = require('stream-batch')
const { Writable } = require('stream')
const getTCPPackets = require('./lib/getTcpPackets')
const { installModule, removeModule } = require('./lib/manageModules')

const writableStream = Writable({objectMode: true})

let win

app.on('ready', () => {
  win = new BrowserWindow({ width: 800, height: 600 })
  win.loadURL(`file://${__dirname}/index.html`)
  win.webContents.openDevTools()
})

app.on('window-all-closed', () => app.quit())

ipcMain.on('selected-interface', (event, arg) => {
  writableStream._write = function (chunk, enc, next) {
    const packets = chunk.map(c => String(c))
    event.sender.send('tcp-packet', packets)
    next();
  } 

  getTCPPackets(arg).pipe(batch({ maxWait: 200 })).pipe(writableStream)
})

ipcMain.on('install-parser', (event, arg) => {
  installModule(arg)
    .then(() => {
    })
    .catch((e) => console.log)
})
