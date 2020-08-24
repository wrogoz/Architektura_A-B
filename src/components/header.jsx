import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../images/logo/LOGO_AB.png";
import Menu from "./navigation/menu";
import BurgerIcon from "./navigation/burger";
import MobileMenu from "./navigation/mobile-menu";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { changeWindowWidth, showHideMobileMenu } from "../redux/actions";
const Header = (props) => {
  const showHideMenu = () => {
    props.dispatch(showHideMobileMenu());
  };

  return (
    <HeaderBox>
      <HeaderRow>
        <Col xs={4}>
          <Link to="/" onClick={props.isMenuOpen ? showHideMenu : null}>
            <Logo src={logo} alt="logo" />
          </Link>
        </Col>
        <Nav xs={8}>
          {props.WindowWidth > 800 ? (
            <Menu />
          ) : (
            <BurgerIcon onClick={showHideMenu} />
          )}
        </Nav>

        {props.isMenuOpen ? <MobileMenu onClick={showHideMenu} /> : null}
      </HeaderRow>

      {window.addEventListener("resize", () => {
        props.dispatch(changeWindowWidth(window.innerWidth));
      })}
    </HeaderBox>
  );
};

const HeaderBox = styled.header`
  margin-bottom: 20px;
  text-transform: uppercase;
`;
const HeaderRow= styled(Row)`
  align-items:center;
`
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
    WindowWidth: state.WindowWidth,
    isMenuOpen: state.isMenuOpen,
  };
};

export default connect(mapStateToProps)(Header);
