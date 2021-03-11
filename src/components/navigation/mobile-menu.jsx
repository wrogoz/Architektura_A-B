import React from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import facebook from "../../images/social/facebook.png";
import instagram from "../../images/social/instagram.png";


const MobileMenu =React.forwardRef((props,ref) => {


  return (
    <Nav xs={12}>
      <ul onClick={props.onClick}
          ref={ref}
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
        <li>
            <SocialBox>
              <StyledLink to="/"><img src={facebook} alt="instagram" /></StyledLink>
              <StyledLink to="/"><img src={instagram} alt="instagram" className="socialImg"/></StyledLink>
            </SocialBox>

        </li>
      </ul>
    </Nav>
  )
});

const Nav = styled(Col)`
  display: flex;
  justify-content: center;
  ul {
    height:0;
    display: flex;
    flex-direction: column;
    list-style: none;
    line-height: 30px;
    margin-bottom: -5px;
    padding-left:20px;
  }
`;
const SocialBox = styled.div`
  display:flex;


`
const StyledLink = styled(Link)`
  margin-bottom: 5px;
  padding-left: 5px;
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
  img {
    height: 20px;
    padding: 0;

  }
  img.socialImg{
    margin-left:10px;
  }
`;

export default MobileMenu;
