import React from "react";
import bathroom from "../../images/entries/bathroom/01_1.jpg";
import Row from "react-bootstrap/Row";
import DesktopProjectElement from '../singleProjectComponent/desktopProjectListElement'
import styled from 'styled-components'



const DesktopArchitecture = (props) => {
 
    // to do: create array with object {title,imgsrc,path} to display

  return (
    <DesktopArchitectureRow noGutters={true}>
      <DesktopProjectElement
     
      imgSrc={bathroom}
      path='/architecture/swimmingPool'
      title='Architecture'
      subTitle="project"
      />
      <DesktopProjectElement
     
      imgSrc={bathroom}
      path='/architecture/swimmingPool'
      title= 'Architecture project'
      subTitle="project"
      />
     <DesktopProjectElement
    
      imgSrc={bathroom}
      path='/architecture/swimmingPool'
      title= 'Architecture project'
      subTitle="project"
      />
      <DesktopProjectElement
  
      imgSrc={bathroom}
      path='/architecture/swimmingPool'
      title= 'Architecture project'
      subTitle="project"
      />
    </DesktopArchitectureRow>
  );
};

const DesktopArchitectureRow = styled(Row)`
  width:70%;
  margin:0 auto;
`

export default DesktopArchitecture