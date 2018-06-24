import { connect } from 'react-redux'
import { selectInterface } from '../actions'
import NetworkInterfaces from '../components/network-interfaces'

const mapStateToProps = state => ({
  selectedInterface: state.selectedInterface
})

const mapDispatchToProps = dispatch => ({
  selectInterface: _interface => dispatch(selectInterface(_interface))
})

const NetworkInterfacesContainer = connect(mapStateToProps, mapDispatchToProps)(NetworkInterfaces)

export default NetworkInterfacesContainer
