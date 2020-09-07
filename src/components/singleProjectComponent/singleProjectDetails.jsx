import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const SingleProject = (props) => {
  const imageList = props.arrayOfImages.map((el) => {
    return (
      <ImageCol xs={12} key={el}>
        <Img  src={el} />
      </ImageCol>
    );
  });

  return (
    <SingleProjectContainer>
      <Row>
        <SingleProjectCol  xs={12}>
          <DescriptionBox>
            <Title>{props.projectName}</Title>
            <p>Lokalizacja:{props.location}</p>
            <p>Klient:{props.client}</p>
            <p>
              Powierzchnia:{props.size} m<sup>2</sup>
            </p>
            <p>Status:{props.status} </p>
            <p>Autorzy:{props.authors} </p>
          </DescriptionBox>
        </SingleProjectCol>
      </Row>
      <ImgRow >{imageList}</ImgRow>
    </SingleProjectContainer>
  );
};
const SingleProjectContainer = styled.section`
@media(min-width:800px){
  display:flex;
}

`
const SingleProjectCol = styled(Col)`
  display: flex;
  flex-direction: column;
  padding-left:25px;
  margin-bottom: 20px;
  @media(min-width:800px){
    padding-left:15px;
}
`;
const ImageCol = styled(Col)`
  
  margin-bottom: 20px;
  overflow: hidden;
  @media(min-width:800px){
    
   display:flex;
  
   justify-content: center;
    height:auto;
   
  }
`;
const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom:15px;
`;
const DescriptionBox = styled.section`
  display: flex;
  flex-direction: column;
  @media(min-width:800px){}
  p {
    margin: 0;
    font-size: 0.9rem;
    /* line-height: 25px;   TO SETTLE! */
  }

`;


const ImgRow = styled(Row)`
 
`;
const Img = styled(Image)`
  width: 100%;
  max-width:700px;
  
  padding: 0 10px;
  @media(min-width:800px){
    margin-top:0;
    margin-right: 10%;
    max-height:87vh;
    max-width: 460px;
    width:auto;
  }
`;

export default SingleProject;
