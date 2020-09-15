import React from 'react'
import styled from 'styled-components'
import Carousel from "react-bootstrap/Carousel"
import Image from "react-bootstrap/Image"
import {mobileImages,desktopImages} from './imagesData'
import { connect } from 'react-redux'
import { changeWindowWidth,changeWindowHeight} from '../../redux/actions';

 


        const HomePageSlider = (props)=>{
          let imagesToDisplay;
          
           if( props.WindowWidth/props.WindowHeight<1){
            
            imagesToDisplay=mobileImages
           }else{
            imagesToDisplay=desktopImages;
           }
            
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
          props.dispatch(changeWindowHeight(window.innerHeight))
          
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
    WindowWidth: state.WindowWidth,
    WindowHeight: state.WindowHeight

  };
};

export default connect(mapStateToProps)(HomePageSlider);