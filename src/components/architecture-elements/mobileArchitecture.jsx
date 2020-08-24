import React from "react";

import Row from "react-bootstrap/Row";

import bathroom from "../../images/entries/bathroom/01_1.jpg";

import MobileProjectElement from '../singleProjectComponent/mobileProjectListElement';
const MobileArchitecture = () => {

  return (
    <Row>

<MobileProjectElement
      title="Architecture 1"
      imgSrc={bathroom}
      path='bathroom'
      />
      <MobileProjectElement
      title="Architecture 2"
      imgSrc={bathroom}
      path='bathroom'
      />
      <MobileProjectElement
      title="Architecture 3"
      imgSrc={bathroom}
      path='bathroom'
      />
      <MobileProjectElement
      title="Architecture 4"
      imgSrc={bathroom}
      path='bathroom'
      />
    </Row>
  );
};



export default MobileArchitecture
