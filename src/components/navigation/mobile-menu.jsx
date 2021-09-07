import React from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import facebook from "../../images/social/facebook.png";
import instagram from "../../images/social/instagram.png";

const MobileMenu = React.forwardRef((props, ref) => {
  return (
    <Nav xs={12}>
      <ul onClick={props.onClick} ref={ref}>
        {[
          { name: "Projekty", url: "/projects" },
          { name: "Architektura", url: "/architecture" },
          { name: " Wnętrza", url: "/entries" },
          { name: "kontakt", url: "/contact" },
        ].map((el, i) => {
          return (
            <li>
              <StyledLink to={el.url}>{el.name}</StyledLink>
            </li>
          );
        })}
 
        <li>
          <MobileExternalLink href="https://www.facebook.com/AB-Architektura-777333362388913">
            <img src={facebook} alt="instagram" />
          </MobileExternalLink>
          <MobileExternalLink href="https://www.instagram.com/aplusb_architektura/?hl=pl">
            <img src={instagram} alt="instagram" />
          </MobileExternalLink>
        </li>
      </ul>
    </Nav>
  );
});

const Nav = styled(Col)`
  display: flex;
  justify-content: center;
  ul {
    height: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
    line-height: 30px;
    margin-bottom: -5px;
    padding-left: 20px;
  }
`;
const MobileExternalLink = styled.a`
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
    padding-left: 15%;
  }
  img.socialImg {
    margin-left: 10px;
  }
  img:first-of-type {
    padding-left: 0;
  }
`;
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
    padding-left: 15%;
  }
  img.socialImg {
    margin-left: 10px;
  }
  img:first-of-type {
    padding-left: 0;
  }
`;

export default MobileMenu;
