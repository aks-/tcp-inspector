import { connect } from 'react-redux'
import { installParser, removeParser } from '../actions'
import TCPPacketsScreen from '../components/tcp-packets-screen'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  installParser: name => dispatch(installParser(name)),
  removeParser: name => dispatch(removeParser(name))
})

const TCPPacketsScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TCPPacketsScreen)

export default TCPPacketsScreenContainer
