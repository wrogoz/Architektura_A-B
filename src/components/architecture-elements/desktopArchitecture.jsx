import React from "react";
import bathroom from "../../images/entries/bathroom/01_1.jpg";
import Row from "react-bootstrap/Row";
import DesktopProjectElement from '../singleProjectComponent/desktopProjectListElement'




const DesktopArchitecture = (props) => {
  
    // to do: create array with object {title,imgsrc,path} to display

  return (
    <Row noGutters={true}>
      <DesktopProjectElement
     
      imgSrc={bathroom}
      path='/architecture/swimmingPool'
      title='Architecture project'
      />
      <DesktopProjectElement
     
      imgSrc={bathroom}
      path='/architecture/swimmingPool'
      title= 'Architecture project'
      />
     <DesktopProjectElement
    
      imgSrc={bathroom}
      path='/architecture/swimmingPool'
      title= 'Architecture project'
      />
      <DesktopProjectElement
  
      imgSrc={bathroom}
      path='/architecture/swimmingPool'
      title= 'Architecture project'
      />
    </Row>
  );
};



export default DesktopArchitecture