import React from 'react'
import styled from 'styled-components'
import Carousel from "react-bootstrap/Carousel"
import Image from "react-bootstrap/Image"
import {mobileImages,desktopImages} from './imagesData'
import { connect } from 'react-redux'
import { changeWindowWidth,changeWindowHeight} from '../../redux/actions';
import {Link} from 'react-router-dom';



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
          <Link to={el.src}><SliderImage className="d-block " src={el.image} alt="slider image" /></Link>
          </Carousel.Item>
            )
          })


            return (

        <Slider indicators={false} controls={false} pause={false} touch={false}  interval={2000}>
           {sliderImages}
           {window.addEventListener('resize',()=>{
          props.dispatch(changeWindowWidth(window.innerWidth))
          props.dispatch(changeWindowHeight(window.innerHeight))

        })}
        </Slider>


            )

        }

const SliderImage = styled(Image)`
  min-height: 80vh;
  width: 100%;
  margin:0 auto;
  overflow: hidden;
  object-fit:cover;


  @media(orientation:landscape ){
  height:69vh;
  margin:0 auto;
}


  @media (min-width: 800px) {
    

    margin:0 ;
    overflow: hidden;
    width:100%;
    min-height: 82vh;
    object-fit: cover;
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