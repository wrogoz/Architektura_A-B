import React from "react";
import bathroom from "../../images/entries/bathroom/01_1.jpg";
import Row from "react-bootstrap/Row";

import MobileProjectElement from "../singleProjectComponent/mobileProjectListElement";



const MobileEntries = (props) => {
  
    // to do: create array with object {title,imgsrc,path} to display

  return (
    <Row>
      <MobileProjectElement
      title="Project 1"
      imgSrc={bathroom}
      path='bathroom'
      />
      <MobileProjectElement
      title="Project 2"
      imgSrc={bathroom}
      path='bathroom'
      />
      <MobileProjectElement
      title="Project 3"
      imgSrc={bathroom}
      path='bathroom'
      />
      <MobileProjectElement
      title="Project 4"
      imgSrc={bathroom}
      path='bathroom'
      />
    </Row>
  );
};



export default MobileEntries