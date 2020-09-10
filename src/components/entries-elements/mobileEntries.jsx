import React from "react";
import bathroom from "../../images/entries/bathroom/01_1.jpg";
import Row from "react-bootstrap/Row";

import MobileProjectElement from "../singleProjectComponent/mobileProjectListElement";



const MobileEntries = (props) => {
  
    // to do: create array with object {title,imgsrc,path} to display

  return (
    <Row>
      <MobileProjectElement
     
      imgSrc={bathroom}
      path='/entries/bathroom'
      />
      <MobileProjectElement
      
      imgSrc={bathroom}
      path='/entries/bathroom'
      />
      <MobileProjectElement
    
      imgSrc={bathroom}
      path='/entries/bathroom'
      />
      <MobileProjectElement
     
      imgSrc={bathroom}
      path='/entries/bathroom'
      />
    </Row>
  );
};



export default MobileEntries