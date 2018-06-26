import React, { Fragment } from 'react'
import HeaderContainer from '../containers/header'
import NetworkInterfacesContainer from '../containers/network-interfaces'
import TCPPacketsScreenContainer from '../containers/tcp-packets-screen'

const App = () => (
  <Fragment>
    <HeaderContainer />
    <NetworkInterfacesContainer />
    <TCPPacketsScreenContainer />
  </Fragment>
)

export default App
