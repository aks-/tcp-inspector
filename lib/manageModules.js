const { spawn } = require('mz/child_process')
const { homedir } = require('os')
const { join } = require('path')
const { writeFile, readFile } = require('mz/fs')
const { ensureFile } = require('fs-extra')

const filename = '.tcp-inspector'
const filepath =  join(homedir(), filename)

const npm = (...args) => {
  return new Promise((accept, reject) => {
    const _npm = spawn('npm', args)

    _npm.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    _npm.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    _npm.on('close', async (code) => {
      console.log(`child process exited with code ${code}`);
      if (code === 0) { accept() } else { reject(code) }
    });
  })
}

const installModule = async name => {
  var installed = false
  try {
    await ensureFile(filepath)

    await npm('install', '--save', name)
    installed = true

    var file = await readFile(filepath)
    if (!file.toString()) {
      file = JSON.stringify([])
    }
    const installedModules = JSON.parse(file)

    if (!installedModules.includes(name)) {
      installedModules.push(name)
      return await writeFile(filepath, JSON.stringify(installedModules))
    }

  } catch (e) {
    if (installed)
      spawn('npm', ['uninstall', '--save', name])
    throw e
  }
}

const removeModule = async name => {
  var removed = false
  try {
    await ensureFile(filepath)

    await npm('uninstall', '--save', name)
    removed = true

    var file = await readFile(filepath)
    if (!file.toString()) {
      file = JSON.stringify([]) 
    }
    const installedModules = JSON.parse(file)

    if (installedModules.includes(name)) {
      const moduleIndex = installedModules.indexOf(name)
      installedModules.splice(moduleIndex, 1)
      return await writeFile(filepath, JSON.stringify(installedModules))
    }
  } catch (e) {
    if (removed)
      spawn('npm', ['install', '--save', name])
    throw e
  }
}

module.exports = {
  installModule,
  removeModule
}
