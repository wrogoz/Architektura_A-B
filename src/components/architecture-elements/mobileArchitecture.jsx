import React from "react";

import Row from "react-bootstrap/Row";

import bathroom from "../../images/entries/bathroom/01_1.jpg";

import MobileProjectElement from '../singleProjectComponent/mobileProjectListElement';
const MobileArchitecture = () => {

  return (
    <Row>

<MobileProjectElement
      
      imgSrc={bathroom}
      path='/architecture/swimmingPool'
      />
      <MobileProjectElement
      
      imgSrc={bathroom}
      path='/architecture/swimmingPool'
      />
      <MobileProjectElement
      
      imgSrc={bathroom}
      path='/architecture/swimmingPool'
      />
      <MobileProjectElement
      
      imgSrc={bathroom}
      path='/architecture/swimmingPool'
      />
    </Row>
  );
};



export default MobileArchitecture
