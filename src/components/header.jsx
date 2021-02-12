import React,{createRef} from "react";
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
import gsap from 'gsap'
const Header = (props) => {
  const mobileNavRef = createRef(null)
  const tl = gsap.timeline()



  const showHideMenu = () => {
    props.dispatch(showHideMobileMenu());
    if(!props.isMenuOpen){
      tl.to(mobileNavRef.current,{height:"auto"})
    }else{
      tl.to(mobileNavRef.current,{height:"0"})
    }
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

        {props.WindowWidth <800? <MobileMenu onClick={showHideMenu} ref={mobileNavRef} /> :null}
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
  overflow:hidden;
  @media(min-width:800px){
    width:98vw;
  }
`;
const HeaderRow= styled(Row)`
  align-items:center;
  & a{
    outline: none;
  }
  @media(min-width:800px){
    align-items: center;
    z-index: 5000;
    background: #fff;
    position: fixed;
    width: 100%;
    padding:10px 0;

  }

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
