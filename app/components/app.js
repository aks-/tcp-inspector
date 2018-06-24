import React, { Fragment } from 'react'
import NetworkInterfacesContainer from '../containers/network-interfaces'
import TCPPacketsScreenContainer from '../containers/tcp-packets-screen'

const App = () => (
  <Fragment>
    <NetworkInterfacesContainer />
    <TCPPacketsScreenContainer />
  </Fragment>
)

export default App
