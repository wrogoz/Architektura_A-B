import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomePageSlider from './homePage-elements/homeSlider'

const HomePage = () => {
  return (
    <Row>
      <HomeBox>
        <HomePageSlider/>
      </HomeBox>
    </Row>
  );
};

const HomeBox = styled(Col)`
  display: flex;
  justify-content: center;
  
`;


export default HomePage;
