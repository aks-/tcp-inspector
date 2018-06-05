import React from 'react'
import {networkInterfaces} from 'os'

const NetworkInterfaces = () => {
  const interfaces = Object.keys(networkInterfaces())

  return <ul>{interfaces.map(_interface => {
    return <li>{_interface}</li>
  })}</ul>
}

export default NetworkInterfaces
