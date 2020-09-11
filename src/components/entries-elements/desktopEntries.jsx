import React from "react";
import Row from "react-bootstrap/Row";
import DesktopProjectElement from '../singleProjectComponent/desktopProjectListElement'
import styled from 'styled-components'
import {entriesListData} from './entriesListData'


const DesktopEntries = (props) => {
  
  const entriesList = entriesListData.map((el,i) => {
    return (
      <DesktopProjectElement
        key={i}
        imgSrc={el.imgSrc}
        path={el.path}
        title={el.title}
        subTitle={el.subtitle}
      />
    )
  })
  return (
    <DesktopEntriesContainer noGutters={true}>
      {entriesList}
    </DesktopEntriesContainer>
  );
};

const DesktopEntriesContainer = styled(Row)`
  width:70%;
  margin:0 auto;
  
`

export default DesktopEntries