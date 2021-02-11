import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const SingleProject = (props) => {
  const imageList = props.arrayOfImages.map((el) => {
    return (
      <ImageCol xs={12}  key={el}>
        <Img  src={el} />
      </ImageCol>
    );
  });

  return (
    <SingleProjectContainer>
      <DescriptionRow>
        <SingleProjectCol  xs={12}  >
          <DescriptionBox>
            <Title>{props.projectName}</Title>
            <p>Autorzy: {props.company} </p>
            <p>{props.authors}</p>
            <p>Lokalizacja: {props.location}</p>
            <p>Projekt: {props.project}</p>
            <p>Realizacja: {props.realization} </p>
            <p>
              Powierzchnia: {props.size} m<sup>2</sup>
            </p>


          </DescriptionBox>
        </SingleProjectCol>
      </DescriptionRow>
      <ImgRow >{imageList}</ImgRow>
    </SingleProjectContainer>
  );
};
const SingleProjectContainer = styled.section`
@media(min-width:800px){
  display:flex;
}

`
const DescriptionRow = styled(Row)`
    @media(min-width:800px){
      width:25%;
      position:absolute;
      z-index:1000;

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
 justify-content: center;
 align-items:flex-start;
  display: flex;
  margin-bottom: 20px;
  overflow: hidden;
  @media(min-width:800px){

   display:flex;


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
  @media(orientation:landscape ){
    /* max-width: 550px; */
}
  @media(min-width:800px){
    margin-top:0;
    /* max-width: 550px; */
    /* max-height:87vh;
    max-width: 460px;             TO Settle*/
    width:auto;
  }
`;

export default SingleProject;
