const defaultState = {
  interfaces: [],
  selectedInterface: "en0",
  parsers: []
}

const tcpInspectorApp = (state = defaultState, action) => {
  switch (action.type) {
    case 'select-interface':
      return Object.assign(state, {
        selectedInterface: action.selectedInterface
      })
      break;
    case 'install-parser':
      return Object.assign(state, {
        parsers: state.parsers.push(action.parser)
      })
    case 'remove-parser':
      const { parser } = action
      const indexOfParser = state.parsers.indexOf(parser)
      if (indexOfParser === -1) return state
      return Object.assign(state, {
        parsers: state.parsers.splice(indexOfParser, 1)
      })
    default:
      return state
  }
}

export default tcpInspectorApp
