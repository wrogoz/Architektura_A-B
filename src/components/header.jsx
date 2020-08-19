import React,{useState} from "react";

import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../images/logo/LOGO_AB.png'
import Menu from './header-menu/menu'
import BurgerIcon from './header-menu/burgerMenu'
import MobileMenu from './header-menu/mobile-menu'
const Header = () => {
   
    const [WindowWidth, setWindowWidth] = useState(window.innerWidth)
    const [burgerActive, setBurgerActive] = useState(false)
    
    const saveWindowWidth = ()=>{
        setWindowWidth(window.innerWidth)
       
    }

    const showHideMobileMenu= ()=>{
      
    setBurgerActive(!burgerActive)
       
    }
  return (
    <header>
      <Row>
      <Col xs={4}>
    <Logo src={logo} alt="logo" />
</Col>
<Col xs={8}>
    <Nav>
        {WindowWidth>800?<Menu />:<BurgerIcon onClick={showHideMobileMenu}/>}
                  
    </Nav>
    </Col>
    {burgerActive?<MobileMenu/>:null}
    
      </Row>
     
      {window.addEventListener('resize',()=>{
    saveWindowWidth()
})}
 

  </header>

  )
};

const Logo = styled.img`
    width:50px;
    height:auto;
    align-self:center;
`
const Nav = styled.nav`
    display:flex;
    list-style:none;
    justify-content:flex-end;
    align-items:center;
    height:100%;
  
    
`

export default Header;
