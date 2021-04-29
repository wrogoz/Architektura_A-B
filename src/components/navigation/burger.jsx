import React from "react";
import hamburger from "../../images/header/menu-24px.svg";
import styled from "styled-components";

const BurgerIcon = (props) => {
  return (
    <>
      <Burger src={hamburger} alt="burger menu" onClick={props.onClick} />
    </>
  );
};
const Burger = styled.img`
  height: 40px;
  transform: translateX(4px);
`;

export default BurgerIcon;
