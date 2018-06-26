const defaultState = {
  interfaces: [],
  selectedInterface: null,
  parsers: [],
  selectedParser: null,
  packets: []
}

const tcpInspectorApp = (state = defaultState, action) => {
  switch (action.type) {
    case 'select-interface':
      return Object.assign({}, state, {
        selectedInterface: action.selectedInterface
      })
      break;
    case 'add-parser':
      return Object.assign({}, state, {
        parsers: state.parsers.concat([action.parser])
      })
    case 'remove-parser':
      const { parser } = action
      const indexOfParser = state.parsers.indexOf(parser)
      if (indexOfParser === -1) return state
      return Object.assign({}, state, {
        parsers: state.parsers.splice(indexOfParser, 1)
      })
    case 'new-packet':
      return Object.assign({}, state, {
        packets: state.packets.concat(action.packet) 
      })
    default:
      return state
  }
}

export default tcpInspectorApp
