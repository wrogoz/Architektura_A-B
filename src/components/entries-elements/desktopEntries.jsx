import React from "react";
import bathroom from "../../images/entries/bathroom/01_1.jpg";
import Row from "react-bootstrap/Row";
import DesktopProjectElement from '../singleProjectComponent/desktopProjectListElement'
import styled from 'styled-components'



const DesktopEntries = (props) => {
  
    // to do: create array with object {title,imgsrc,path} to display

  return (
    <DesktopEntriesContainer noGutters={true}>
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
    </DesktopEntriesContainer>
  );
};

const DesktopEntriesContainer = styled(Row)`
  width:70%;
  margin:0 auto;
  
`

export default DesktopEntries