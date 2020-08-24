import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../images/startPage/img1.jpg";
import img2 from "../images/startPage/img2.jpg";

const HomePage = () => {
  return (
    <Test>
      <HomeBox>
        <Slider indicators={false} controls={false} interval={3000}>
          <Carousel.Item>
            <SliderImage
              className="d-block w-100"
              bgImage={img1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <SliderImage
              className="d-block w-100"
              bgImage={img2}
              alt="second slide"
            />
          </Carousel.Item>
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
const Slider = styled(Carousel)`
  width: 100%;
`;
const SliderImage = styled.div`
        min-height:80vh;
        width:100%;
        background-image:url("${(props) => props.bgImage}");
        background-size: auto 100%;
        background-position: 30% 50%;
        background-repeat: no-repeat;
        @media(min-width:800px){
          background-size:cover;
          background-position:0;
          min-height:73vh;
        }
    `;
export default HomePage;
