import React from 'react'
import Row from 'react-bootstrap/Row'
import {architectureListData} from './architectureListData'


import MobileProjectElement from '../singleProjectComponent/mobileProjectListElement'
const MobileArchitecture = () => {
  const architectureList = architectureListData.map((el,i) => {
    return <MobileProjectElement key={i} imgSrc={el.imgSrc} path={el.path} />
  })
  return <Row>{architectureList}</Row>
}

export default MobileArchitecture
