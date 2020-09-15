import React,{createRef,useEffect} from "react";
import Row from 'react-bootstrap/Row';
import DesktopProjectElement from '../singleProjectComponent/desktopProjectListElement';
import styled from 'styled-components';
import {architectureListData} from './architectureListData'
import gsap from 'gsap'

const DesktopArchitecture = (props) => {
  const imagesRef=createRef(null)
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
  useEffect(() => {
    gsap.from(imagesRef.current.children,{opacity:0,duration:0.6,stagger:0.2,ease: "steps(12)",delay:0.5})
    // eslint-disable-next-line 
  }, [])
  return (
    <DesktopArchitectureRow noGutters={true} ref={imagesRef}>
      {architectureList}
    </DesktopArchitectureRow>
  );
};

const DesktopArchitectureRow = styled(Row)`
  width: 70%;
  margin: 0 auto;
`;

export default DesktopArchitecture;
