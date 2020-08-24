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
          </ImgBox>
        </Link>
      </Col>
    )
}
const ProjectTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: #000;
  letter-spacing: 4px;
  text-transform: uppercase;
`;
const Img = styled(Image)`
  width: 100%;
 
  padding: 0 10px;
`;
const ImgBox = styled.div`
  height: 70vh;
  overflow: hidden;
  margin-bottom: 20px;
`;


export default DesktopProjectElement