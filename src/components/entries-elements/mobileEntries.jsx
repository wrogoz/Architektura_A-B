import React from 'react';
import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import bathroom from '../../images/entries/bathroom/01_1.jpg'
const MobileEntries = ()=> {
    return(
        <Row>
            
            <ProjectCol sm={12} >
                <ProjectTitle >Bathroom Project</ProjectTitle>
                <Img src={bathroom} rounded />
            </ProjectCol>
            <ProjectCol sm={12} >
                <ProjectTitle >Title</ProjectTitle>
                <Img src={bathroom} rounded />
            </ProjectCol>
            <ProjectCol sm={12} >
                <ProjectTitle >Title</ProjectTitle>
                <Img src={bathroom} rounded />
            </ProjectCol>
            <ProjectCol sm={12} >
                <ProjectTitle >Title</ProjectTitle>
                <Img src={bathroom} rounded />
            </ProjectCol>
        </Row>
    )
}
const ProjectCol = styled(Col)`
    height:40vh;
    overflow:hidden;
    margin-bottom:20px;

`
const ProjectTitle = styled.h2`
font-size:1rem;
font-weight:bold;
    text-align:center;
    color:#000;
`
const Img = styled(Image)`
        width: 100%;
        margin-bottom: 20px;
        padding:0 10px;
        
     
      
`


export default MobileEntries