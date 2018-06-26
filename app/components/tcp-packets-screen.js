import React, { Fragment } from 'react'

const NetworkInterfaces = ({ parsers, selectedInterface }) => {
  if (!selectedInterface) return <Fragment></Fragment>

  return <div>
    {JSON.stringify(parsers)} - {selectedInterface}
  </div>
}

export default NetworkInterfaces
