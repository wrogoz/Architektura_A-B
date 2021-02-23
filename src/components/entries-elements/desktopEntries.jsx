import React,{createRef,useEffect} from "react";
import Row from "react-bootstrap/Row";
import DesktopProjectElement from '../singleProjectComponent/desktopProjectListElement'
import styled from 'styled-components'
import {entriesListData} from './entriesListData'
import gsap from 'gsap'

const DesktopEntries = (props) => {
  const imagesRef=createRef(null)
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



  useEffect(() => {
    gsap.from(imagesRef.current.children,{opacity:0,duration:0.6,stagger:0.2,ease: "steps(12)"})
    // eslint-disable-next-line
  }, [])
  return (
    <DesktopEntriesContainer noGutters={true} ref={imagesRef}>
      {entriesList}
    </DesktopEntriesContainer>
  );
};

const DesktopEntriesContainer = styled(Row)`
  width:70%;
  margin:0 auto;


`

export default DesktopEntries