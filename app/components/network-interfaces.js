import React from 'react'
import { networkInterfaces } from 'os'

const NetworkInterfaces = ({ selectInterface, selectedInterface }) => {
  if (selectedInterface)
    return <Fragment></Fragment>

  const interfaces = Object.keys(networkInterfaces())

  return <ul>{interfaces.map(_interface => {
    return <li key={_interface} onClick={() => selectInterface(_interface)}>{_interface}</li>
  })}</ul>
}

export default NetworkInterfaces
