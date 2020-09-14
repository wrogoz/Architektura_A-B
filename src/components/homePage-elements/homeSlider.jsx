import React from 'react'
import styled from 'styled-components'
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import img1 from "../../images/startPage/img1.jpg"
import img2 from "../../images/startPage/img2.jpg"

  let imgData = [img1,img2];



        const HomePageSlider = ()=>{

          const sliderImages = imgData.map((el,i)=>{
            return(
              <Carousel.Item key={i}>
            <SliderImage className="d-block " src={el} alt="slider image" />
          </Carousel.Item>
            )
          })


            return (
                
        <Slider indicators={false} controls={false} pause={false} touch={false}>
           {sliderImages}
        </Slider>
            )
        };

const SliderImage = styled(Image)`
  height: 75vh;
  width: auto;
 
  overflow: hidden;
 
  
  @media(orientation:landscape ){
  height:69vh;
  margin:0 auto;
}


  @media (min-width: 800px) {
    height: auto;
    max-height:84vh;
    margin:0 auto;
    overflow: hidden;
    width:100%;
    
  }
`;

const Slider = styled(Carousel)`
width: 100%;
position: relative;
overflow: hidden;
margin:0 auto;


`;
export default HomePageSlider