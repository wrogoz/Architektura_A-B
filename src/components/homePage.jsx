import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"
import img1 from "../images/startPage/img1.jpg";
import img2 from "../images/startPage/img2.jpg";

const HomePage = () => {
  return (
    <Test>
      <HomeBox>
        <Slider indicators={false} controls={false} pause={false} >
          <CarouselItem >
            <SliderImage
              className="d-block "
              src={img1}
              alt="First slide"
            />
          </CarouselItem>
          <CarouselItem >
            <SliderImage
              className="d-block "
              src={img2}
              alt="second slide"
            />
          </CarouselItem>
        </Slider>
      </HomeBox>
    </Test>
  );
};
const Test = styled(Row)``;
const HomeBox = styled(Col)`
  display: flex;
  justify-content: center;
`;
const CarouselItem = styled(Carousel.Item)`
  position: relative;
  overflow:hidden;
  width:auto;
  `
const Slider = styled(Carousel)`
  width: 100%;
`;
const SliderImage = styled(Image)`
        height:70vh;
        width:100%;
       
        @media(min-width:800px){
         
          height:73vh;
        }
    `;
export default HomePage;
