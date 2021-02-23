import React,{useEffect,createRef} from "react";
import gsap from 'gsap'
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {

const navRef = createRef(null)

useEffect(() => {
  gsap.from(navRef.current.children, {opacity:0,stagger:0.2,x:30,duration:1.4,ease:"power4.out",delay:0.3})
// eslint-disable-next-line
}, [])

  return (
    <Ul ref={navRef}>
      <li>
        <MenuLink to="/projekty">Projekty</MenuLink>
      </li>
      <li>
        <MenuLink to="/architecture">Architektura</MenuLink>
      </li>
      <li>
        <MenuLink to="/entries" activeClassName="active">wnętrza</MenuLink>
      </li>
      <li>
        <MenuLink to="/kontakt">kontakt</MenuLink>
      </li>



    </Ul>
  );
};
const Ul = styled.ul`
  display: flex;

  list-style: none;
  line-height: 30px;
  margin-bottom: -5px;
`
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
&.active{
  font-weight:bold;
}
`;

export default Menu;
