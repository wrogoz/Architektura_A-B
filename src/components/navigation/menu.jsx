import React,{useEffect,createRef} from "react";
import gsap from 'gsap'
import { Link } from "react-router-dom";
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
        <NavLink to="/projekty">Projekty</NavLink>
      </li>
      <li>
        <NavLink to="/architecture">Architektura</NavLink>
      </li>
      <li>
        <NavLink to="/entries">wnętrza</NavLink>
      </li>
      <li>
        <NavLink to="/kontakt">kontakt</NavLink>
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
const NavLink = styled(Link)`
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
`;

export default Menu;
