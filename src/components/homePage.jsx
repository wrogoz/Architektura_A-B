import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "../images/startPage/img1.jpg";
import img2 from "../images/startPage/img2.jpg";

const HomePage = () => {
  return (
    <Row>
      <HomeBox>
        <Slider indicators={false} controls={false} pause={false}>
          <Carousel.Item>
            <SliderImage className="d-block " src={img1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <SliderImage className="d-block " src={img2} alt="second slide" />
          </Carousel.Item>
        </Slider>
      </HomeBox>
    </Row>
  );
};

const HomeBox = styled(Col)`
  display: flex;
  justify-content: center;
  
`;

const Slider = styled(Carousel)`
  width: 100%;
  position: relative;
  overflow: hidden;
`;
const SliderImage = styled(Image)`
  height: 75vh;
  width: auto;
  overflow: hidden;
  /* @media(max-height:641px){
    max-height:65vh;
  } */
  @media (min-width: 800px) {
    height: auto;
    
    margin:0 auto;
    overflow: hidden;
    width:100%;
    
  }
`;
export default HomePage;
