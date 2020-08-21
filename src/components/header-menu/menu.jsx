import React from "react";
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Menu = () => {
 
  return (
    <>
    
        <li><NavLink to='/projekty'>Projekty</NavLink></li>
        <li><NavLink  to='/Architektura'>Architektura</NavLink></li>
        <li><NavLink to='/entries'>wnętrza</NavLink></li>
        <li><NavLink to='/kontakt'>kontakt</NavLink></li>
   
       
  </>
  
  )};

const NavLink  = styled(Link)`
    text-decoration:none;
    color:#000;
    padding:0 15px;
    &:link{
      text-decoration:none;
    color:#000;
    }
    &:visited{
      text-decoration:none;
    color:#000;
    }
  `


export default Menu;
