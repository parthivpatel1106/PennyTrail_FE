import React from 'react'
import { styled } from 'styled-components'

export const HeroSection = () => {
  return (
    <>
        <HeroWrapper>
            <Title>Navigate Your Financial Journey</Title>
            <Description>Your digital compass for effortless budgeting, tracking expenses, and achieving financial goals.</Description>
        </HeroWrapper>
    </>
  )
}

const HeroWrapper=styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 50% 50%;
    /* gap: 1rem; */
`
const Title=styled.h2`
    color: white;
    font-family: 'Space Grotesk';
    font-weight: 400;
    font-size: 64px;
    margin: 1rem 0rem;
    /* line-height: 60px; */
`
const Description=styled.h4`
    color: white;
    font-family: 'Space Grotesk';
    font-weight: 400;
    font-size: 24px;
`
