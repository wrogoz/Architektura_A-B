import React from 'react'
import styled from 'styled-components'
import Carousel from "react-bootstrap/Carousel"
import Image from "react-bootstrap/Image"
import {mobileImages,desktopImages} from './imagesData'
import { connect } from 'react-redux'
import { changeWindowWidth} from '../../redux/actions';

 


        const HomePageSlider = (props)=>{
          let imagesToDisplay;
            props.WindowWidth<800?imagesToDisplay=mobileImages:imagesToDisplay=desktopImages;
          const sliderImages = imagesToDisplay.map((el,i)=>{



            return(
              <Carousel.Item key={i}>
            <SliderImage className="d-block " src={el} alt="slider image" />
          </Carousel.Item>
            )
          })


            return (
                
        <Slider indicators={false} controls={false} pause={false} touch={false}>
           {sliderImages}


           {window.addEventListener('resize',()=>{
          props.dispatch(changeWindowWidth(window.innerWidth))
          
        })}
        </Slider>

      
            )
           
        }

const SliderImage = styled(Image)`
  height: 75vh;
  width: auto;
  margin:0 auto;
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
const mapStateToProps = (state) => {
  return {
    WindowWidth: state.WindowWidth

  };
};

export default connect(mapStateToProps)(HomePageSlider);