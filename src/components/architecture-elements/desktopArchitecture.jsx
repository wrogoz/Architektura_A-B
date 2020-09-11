import React from 'react';
import Row from 'react-bootstrap/Row';
import DesktopProjectElement from '../singleProjectComponent/desktopProjectListElement';
import styled from 'styled-components';
import {architectureListData} from './architectureListData'


const DesktopArchitecture = (props) => {
  const architectureList = architectureListData.map((el,i) => {
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
    <DesktopArchitectureRow noGutters={true}>
      {architectureList}
    </DesktopArchitectureRow>
  );
};

const DesktopArchitectureRow = styled(Row)`
  width: 70%;
  margin: 0 auto;
`;

export default DesktopArchitecture;
