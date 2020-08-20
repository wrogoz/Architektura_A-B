import React, { useState } from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../images/logo/LOGO_AB.png";
import Menu from "./header-menu/menu";
import BurgerIcon from "./header-menu/burgerMenu";
import MobileMenu from "./header-menu/mobile-menu";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import {changeWindowWidth} from '../redux/actions';
const Header = (props) => {
  
  const [burgerActive, setBurgerActive] = useState(false);


  const showHideMobileMenu = () => {
    setBurgerActive(!burgerActive);
   
  };
  return (
    <HeaderBox>
      
      <Row>
        <Col xs={4}>
          <Link to="/" onClick={burgerActive ? showHideMobileMenu : null}>
            <Logo src={logo} alt="logo" />
          </Link>
        </Col>
        <Nav xs={8}>
          
            {props.WindowWidth > 800 ? (
              <Menu />
            ) : (
              <BurgerIcon onClick={showHideMobileMenu} />
            )}
          </Nav>
        
        {burgerActive ? <MobileMenu onClick={showHideMobileMenu} /> : null}
      </Row>

      {window.addEventListener("resize", () => {
        props.dispatch(changeWindowWidth(window.innerWidth))
      })}
    </HeaderBox>
  );
};
const HeaderBox = styled.header`
  margin-bottom: 20px;
`;
const Logo = styled.img`
  width: 70px;
  height: auto;
  align-self: center;
`;
const Nav = styled(Col)`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;




const mapStateToProps = (state) => {
  return {
    WindowWidth:state.WindowWidth
  };
};

export default connect(mapStateToProps)(Header);
