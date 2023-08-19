import React from 'react'
import { styled } from 'styled-components'
import { HeroSection } from './HeroSection'

export const Landing = () => {
  return (
    <React.Fragment>
        <LandingContainer>
            <HeroSection/>
        </LandingContainer>
    </React.Fragment>
  )
}

const LandingContainer=styled.div`
    display: flex;
    height: auto;
    width: 100%;
    padding: 10px 10px;
`