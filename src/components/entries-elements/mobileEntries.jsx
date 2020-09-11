import React from "react";
import Row from "react-bootstrap/Row";
import {entriesListData} from "./entriesListData"
import MobileProjectElement from "../singleProjectComponent/mobileProjectListElement";



const MobileEntries = (props) => {
  
  const entriesList = entriesListData.map((el,i) => {
    return (
      <MobileProjectElement
        key={i}
        imgSrc={el.imgSrc}
        path={el.path}
      />
    )
  })
  
  return (
    <Row>
      {entriesList}
    </Row>
  );
};



export default MobileEntries