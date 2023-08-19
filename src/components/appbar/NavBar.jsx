import { AppBar,Toolbar} from '@mui/material'
import React from 'react'
import logo from '../../assets/logo/PennyTrailLogoWB.png'
import { styled } from 'styled-components'


export const NavBar = () => {
return (
    <React.Fragment>
        <LogoWrapper>
            <Logo src={logo}></Logo>
        </LogoWrapper>
    </React.Fragment>
  )
}

    
export const LogoWrapper=styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    place-items: center;
    height: 50px;
    width: 200px;
    /* border: 1px solid red; */
    @media (max-width:768px) {
        height: 40px;
        width: 100px;
    }
`
export const Logo=styled.img`
    height: 40px;
    width:150px;
    /* border: 2px solid green; */
    @media (max-width:768px) {
        height: 30px;
        width:90px;
    }
`