import React, { Fragment } from 'react'
import styled from 'styled-components'
import Header from './header'

const Row = styled.p`
  border-bottom: 1px solid red;
`

const Packets = ({ packets }) => (<div>
  {packets.map(( packet, i ) => <Row key={i}>{packet}</Row>)}
</div>)

const NetworkInterfaces = ({ packets }) => {
  if (packets.length === 0) {
    return <Fragment></Fragment>
  }

  return <div>
    <Packets packets={packets}/>
  </div>
}

export default NetworkInterfaces
