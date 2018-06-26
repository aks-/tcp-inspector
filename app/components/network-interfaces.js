import React, { Fragment } from 'react'
import { networkInterfaces } from 'os'
import styled from 'styled-components'

const Ul = styled.ul`
  display: flex;
`

const Li = styled.li`
    list-style: none;
    text-align: center;
    background: #b71717;
    padding: 21px;
    width: 20%;
    margin: 10px;
    border-radius: 8px;
    font-size: 1.2em;
    color: white;
    cursor: pointer;
`

const Head = styled.h2`
  text-align: center;
`

const NetworkInterfaces = ({ selectInterface, selectedInterface }) => {
  if (selectedInterface)
    return <Fragment></Fragment>

  const interfaces = Object.keys(networkInterfaces())

  return (
    <div>
      <Head>Select interface</Head>
      <Ul>{interfaces.map(_interface => {
        return <Li key={_interface} onClick={() => selectInterface(_interface)}>{_interface}</Li>
      })}</Ul>
  </div>
  )
}

export default NetworkInterfaces
