import React,{createRef,useEffect} from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import gsap from "gsap"
const MobileMenu = (props) => {

  const mobileNav = createRef(null)
  useEffect(() => {
    gsap.from(mobileNav.current,{height:"0px",opacity:0})
    // eslint-disable-next-line 
  }, [])

  return (
    <Nav xs={12}>
      <ul onClick={props.onClick}
          ref={mobileNav}
          >
        <li>
          <StyledLink to="/">Strona główna</StyledLink>
        </li>
        <li>
          <StyledLink to="/projekty">Projekty</StyledLink>
        </li>
        <li>
          <StyledLink to="/architecture">Architektura</StyledLink>
        </li>
        <li>
          <StyledLink to="/entries">wnętrza</StyledLink>
        </li>
        <li>
          <StyledLink to="/kontakt">kontakt</StyledLink>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled(Col)`
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    line-height: 30px;
    margin-bottom: -5px;
  }
`;
const StyledLink = styled(Link)`
  margin-bottom: 5px;
  text-decoration: none;
  color: #000;
  &:link {
    text-decoration: none;
    color: #000;
  }
  &:visited {
    text-decoration: none;
    color: #000;
  }
`;

export default MobileMenu;
