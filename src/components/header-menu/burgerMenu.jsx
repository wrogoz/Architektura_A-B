import React,{useState} from "react";
import hamburger from '../../images/header/menu-24px.svg'
import styled from 'styled-components'

const BurgerIcon= (props) => {
  
  return (

   <>

        <img src={hamburger} alt="burger menu" onClick={props.onClick}/>
       
    </>
  )};



export default BurgerIcon;
