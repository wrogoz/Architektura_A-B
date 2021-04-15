import React,{useEffect} from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { connect } from "react-redux";
import { changeWindowWidth } from "../../redux/actions";

const SingleProject = (props) => {
  window.addEventListener("resize", () => {
    props.dispatch(changeWindowWidth(window.innerWidth));
  });
  let imageList = [];
  if (props.WindowWidth < 800) {
    imageList = props.arrayOfImages.map((el, id) => {
      return (
        <ImageCol xs={12} key={id}>
          <Img src={el.imgSrc} />
        </ImageCol>
      );
    });
  } else {
    imageList = props.arrayOfImages.map((el, id) => {
      if (el.type === "horizontal") {
        return (
          <ImageCol xs={12} key={id}>
            <Img src={el.imgSrc} />
          </ImageCol>
        );
      } else {
        return (
          <ImageCol xs={6} key={id}>
            <Img src={el.imgSrc} />
          </ImageCol>
        );
      }
    });
  }
  useEffect(() => {
    window.scroll(0, 0);

  }, [])
  return (
    <SingleProjectContainer>
      <DescriptionRow>
        <SingleProjectCol xs={12}>
          <DescriptionBox>
            <Title>{props.projectName}</Title>
            <p>autorzy: {props.company} </p>
            <p>{props.authors}</p>
            <p>lokalizacja: {props.location}</p>
            <p>projekt: {props.project}</p>
           {props.realization && <p>realizacja: {props.realization} </p>}
            <p>
              powierzchnia: {props.size} m<sup>2</sup>
            </p>
            {props.photograph ? <p>zdjęcia: {props.photograph}</p> : null}
          </DescriptionBox>
        </SingleProjectCol>
      </DescriptionRow>
      <ImgRow>{imageList}</ImgRow>

    </SingleProjectContainer>
  );
};
const SingleProjectContainer = styled.section`

  @media (min-width: 800px) {

    display: flex;
    justify-content: center;
  }
`;
const DescriptionRow = styled(Row)`

  @media (min-width: 800px) {
    width: 25%;
    position: absolute;
    left: 0;
    z-index: 1000;
    padding-left:15px;
  }
`;
const SingleProjectCol = styled(Col)`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  margin-bottom: 20px;
  @media (min-width: 800px) {
    padding-left: 15px;
  }
`;

const Title = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 15px;
  padding-bottom:10px;
`;
const DescriptionBox = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
  }
  p {
    margin: 0;
    font-size: 0.9rem;

  }
`;

const ImgRow = styled(Row)`
  display: flex;
  justify-content: center;
  //added
  @media (min-width: 800px) {
    margin:0;

    padding: 0 25%;
  }
  @media (min-width: 1100px) {
    margin:0;

    padding: 0 22%;
  }

`;
const ImageCol = styled(Col)`
  justify-content: center;
  align-items: flex-start;
  display: flex;
  margin-bottom: 20px;
  overflow: hidden;
  @media (min-width: 800px) {
    display: flex;
    //added
    margin: 7px 0;
    padding:0 7px;
    //adding finished
    height: auto;
  }
`;
const Img = styled(Image)`
  width: 100%;
  max-width: 700px;
  padding: 0 10px;
  @media (orientation: landscape) {
    /* max-width: 550px; */
  }
  @media (min-width: 800px) {
    margin:0;
    padding:0;
    /* max-width: 550px; */
    /* max-height:87vh;
    max-width: 460px;             TO Settle*/
    max-width:1200px;
  }
`;

const mapStateToProps = (state) => {
  return {
    WindowWidth: state.WindowWidth,
  };
};
export default connect(mapStateToProps)(SingleProject);
