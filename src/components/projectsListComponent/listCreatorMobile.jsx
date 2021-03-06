import React from "react";
import Row from "react-bootstrap/Row";
import MobileProjectElement from "./singleProjectComponent/mobileProjectListElement";



const ListCreatorMobile = (props) => {

  const entriesList = props.ListData.map((el,i) => {
    return (
      <MobileProjectElement
        key={i}
        imgSrc={el.imgSrc}
        path={el.path}
        title={el.title}
        subTitle={el.subtitle}
      />
    )
  })

  return (
    <Row>
      {entriesList}
    </Row>
  );
};



export default ListCreatorMobile