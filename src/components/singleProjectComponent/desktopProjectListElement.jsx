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
            <p>{props.title}</p>
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
  margin:15px;
  
  
`;
const Mask = styled.div`
display:flex;
justify-content:center;
align-items:center;
top:0;
left:0;
  position:absolute;
  height:100%;
  width:100%;
  opacity:0;
  background:#cccccc30;
 
  p{
    color:#fff;
    font-size:2rem;
    text-transform:uppercase;
   
  }
  &:hover{
    opacity:1;
    

  }

`


export default DesktopProjectElement