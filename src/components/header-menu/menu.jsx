import React from "react";
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Menu = () => {
 
  return (
    <>
    
        <li><Link to='/projekty'>Projekty</Link></li>
        <li><Link to='/Architektura'>Architektura</Link></li>
        <li><Link to='/wnętrza'>wnętrza</Link></li>
        <li><Link to='/kontakt'>kontakt</Link></li>
   
       
  </>
  
  )};




export default Menu;
