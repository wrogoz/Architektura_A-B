import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col'
import {Image} from 'react-bootstrap'

const DesktopProjectElement = (props)=>{

   
    return(
        <Col md={6}>
        <Link to={props.path} >
   
          <ImgBox>
         
          <Img src={props.imgSrc} rounded />
          <Mask >
            <Title>{props.title}</Title>
            <SubTitle>{props.subTitle}</SubTitle>
          </Mask>
          
          </ImgBox>
        </Link>
      </Col>
    )
}

const Img = styled(Image)`
  width: 100%;
  position:relative;
  border-radius:0 !important;
`;
const ImgBox = styled.div`
position:relative;
  max-height: 35vh;
  max-width:40vw;
  overflow: hidden;
  margin:7px;
  
  
`;
const Mask = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
top:0;
left:0;
  position:absolute;
  height:100%;
  width:100%;
  opacity:0;
  background:#ffffff90;
  padding-top: 5%;
  font-family:interBlackBold;
  
  &:hover{
    opacity:1;
    

  }

`
const Title = styled.p`
   color:#000;
    font-size:1.2rem;
    text-transform:uppercase;
    margin-bottom:0.4rem;
`
const SubTitle = styled.p`
   color:#000;
    font-size:1rem;
    text-transform:uppercase;
`
export default DesktopProjectElement