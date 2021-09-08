import React, { useEffect } from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomePageSlider from "./homePage-elements/homeSlider";
 import CookieBanner from 'react-cookie-banner';

const HomePage = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("hideScrollBar");
    return () => {
      document.querySelector("body").classList.remove("hideScrollBar");
    };
  }, []);
  return (
    <Row>
      <HomeBox>
    <StyledCookieBanner
          message="Strona korzysta z cookies"
          buttonMessage="Akceptuję"
      onAccept={() => {}}
      cookie="user-has-accepted-cookies" />

);
        <HomePageSlider />
      </HomeBox>
    </Row>
  );
};

const HomeBox = styled(Col)`
  display: flex;
  justify-content: center;
`;
const StyledCookieBanner = styled(CookieBanner)`
  position: absolute !important;
  bottom:0;
  right:0;
  z-index:8000;
  width:40% !important;
  background-color: rgba(40,40,40,0.5) !important;
  @media(max-width:600px){
    width:100% !important;
  }
`
export default HomePage;
