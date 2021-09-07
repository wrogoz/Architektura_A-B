import React, { useEffect, createRef } from "react";
import gsap from "gsap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import facebook from "../../images/social/facebook.png";
import instagram from "../../images/social/instagram.png";
const Menu = () => {
  const navRef = createRef(null);

  useEffect(() => {
    gsap.from(navRef.current.children, {
      opacity: 0,
      stagger: 0.2,
      x: 30,
      duration: 1.4,
      ease: "power4.out",
      delay: 0.3,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <MenuContent>
      <CompanyName>A+B Architektura</CompanyName>
      <Ul ref={navRef}>
        <li>
          <MenuLink to="/projekty">Projekty</MenuLink>
        </li>
        <li>
          <MenuLink to="/architecture" >Architektura</MenuLink>
        </li>
        <li>
          <MenuLink to="/entries">
            wnętrza
          </MenuLink>
        </li>
        <li>
          <MenuLink to="/kontakt">kontakt</MenuLink>
        </li>
        <li>
          <ExternalLink href="https://www.facebook.com/AB-Architektura-777333362388913" id="fb">
            <img src={facebook} alt="facebook" />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.instagram.com/aplusb_architektura/?hl=pl">
            <img src={instagram} alt="instagram" />
          </ExternalLink>
        </li>
      </Ul>
    </MenuContent>
  );
};
const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px 0 0;
`;
const ExternalLink = styled.a`
  text-decoration: none;
  color: #000;
  padding: 0 15px;

  &:link {
    text-decoration: none;
    color: #000;
    outline: none;
  }
  &:visited {
    text-decoration: none;
    color: #000;
  }
  &.active {
    font-weight: bold;
  }

  &#fb{
    padding-left:0;
  }
  img {
    height: 20px;
    padding: 0;
  }

`;

const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  padding: 0 15px;

  &:link {
    text-decoration: none;
    color: #000;
    outline: none;
  }
  &:visited {
    text-decoration: none;
    color: #000;
  }
  &.active {
    font-weight: bold;
  }

  &#fb{
    padding-left:0;
  }
  img {
    height: 20px;
    padding: 0;
  }

`;
const CompanyName = styled.p`
  align-self: flex-end;
  font-size: 0.9rem;
  font-weight: bold;
  padding-right: 2px;

  margin: 0;
  /* letter-spacing: 2px; */
`;
const Ul = styled.ul`
  display: flex;

  list-style: none;
  line-height: 30px;
  margin-bottom: -10px;
  li:last-of-type {
    a {
      padding: 0;
    }
  }

`;

export default Menu;
