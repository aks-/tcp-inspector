import React from 'react'

const NetworkInterfaces = ({ parsers, selectedInterface }) => {
  return <div>
    {JSON.stringify(parsers)} - {selectedInterface}
  </div>
}

export default NetworkInterfaces
