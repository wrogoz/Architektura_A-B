import React from "react";
import bathroom from "../../images/entries/bathroom/01_1.jpg";
import Row from "react-bootstrap/Row";
import DesktopProjectElement from '../singleProjectComponent/desktopProjectListElement'




const DesktopEntries = (props) => {
  
    // to do: create array with object {title,imgsrc,path} to display

  return (
    <Row noGutters={true}>
      <DesktopProjectElement
     
      imgSrc={bathroom}
      path='/entries/bathroom'
      title="Entries project"
      />
      <DesktopProjectElement
     
      imgSrc={bathroom}
      path='/entries/bathroom'
      title="Entries project"
      />
     <DesktopProjectElement
    
      imgSrc={bathroom}
      path='/entries/bathroom'
      title="Entries project"
      />
      <DesktopProjectElement
  
      imgSrc={bathroom}
      path='/entries/bathroom'
      title="Entries project"
      />
    </Row>
  );
};



export default DesktopEntries