import { connect } from 'react-redux'
import { installParser, removeParser } from '../actions'
import Header from '../components/header'

const mapStateToProps = state => ({
  selectedInterface: state.selectedInterface,
  parsers: state.parsers
})

const mapDispatchToProps = dispatch => ({
  installParser: name => dispatch(installParser(name)),
  removeParser: name => dispatch(removeParser(name))
})

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
