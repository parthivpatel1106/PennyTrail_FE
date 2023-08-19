import React from 'react'
import { styled } from 'styled-components'
import { NavBar } from './appbar/NavBar'

export const HeaderSection = () => {
  return (
    <Header>
          <NavBar/>  
    </Header>

  )
}

const Header=styled.div`
    width: 100%;
    flex-grow: 1;
    padding: 10px 10px;
`
