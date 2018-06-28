import React, { Fragment } from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  background: #11af2f;
  height: 50px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  margin: 0;
`

const Brand = styled.h3`
  text-align: left;
`

const Input = styled.input`
  margin: 10px;
`

const Select = styled.select`
  margin: 20px;
`

const Header = ({ parsers, selectedInterface, installParser }) => {
  const onKeyDown = e => {
    const value = e.target.value
    if (e.key !== 'Enter' || !value) return
    e.target.value = ''
    installParser(value)
  }

  return (
    <HeaderWrapper>
      <Brand>TCP Inspector</Brand>
      {
        parsers.length > 0 && selectedInterface ?
          <Select>
            {parsers.map(parser => <option>{parser}</option>)}
          </Select> :
          ''
      }
      {
        selectedInterface ?
          <Input onKeyDown={onKeyDown} /> :
          ''
      }

    </HeaderWrapper>
  )
}

export default Header
