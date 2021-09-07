import React, { useEffect } from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomePageSlider from "./homePage-elements/homeSlider";

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
        <HomePageSlider />
      </HomeBox>
    </Row>
  );
};

const HomeBox = styled(Col)`
  display: flex;
  justify-content: center;
`;

export default HomePage;
