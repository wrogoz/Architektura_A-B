import React from 'react';
import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import bathroom from '../../images/entries/bathroom/01_1.jpg'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {showHideMobileMenu} from '../../redux/actions'
const MobileEntries = (props)=> {

    const hideMobileMenu = ()=>{
       if(props.isMenuOpen){
        props.dispatch(showHideMobileMenu())
       }

    }

    return(
        <Row>

<Col sm={12} >
            <Link to="/entries/bathroom" onClick={hideMobileMenu}>
                <ProjectTitle >Title</ProjectTitle>
                <ImgBox>
                    <Img src={bathroom} rounded />
                </ImgBox>
            </Link>   
            </Col>

            <Col sm={12} >
            <Link to="/entries/bathroom">
                <ProjectTitle >Title</ProjectTitle>
                <ImgBox>
                    <Img src={bathroom} rounded />
                </ImgBox>
            </Link>   
            </Col>
            <Col sm={12} >
                <ProjectTitle >Title</ProjectTitle>
                <ImgBox>
                    <Img src={bathroom} rounded />
                </ImgBox>
            </Col>
            <Col sm={12} >
                <ProjectTitle >Title</ProjectTitle>
                <ImgBox>
                    <Img src={bathroom} rounded />
                </ImgBox>
            </Col>
        </Row>
    )
}

const ProjectTitle = styled.h2`
font-size:1rem;
font-weight:bold;
    text-align:center;
    color:#000;
    letter-spacing: 4px;
    text-transform:uppercase;

`
const Img = styled(Image)`
        width: 100%;
        margin-top:-18%;
        padding:0 10px;
        
     
      
`
const ImgBox = styled.div`
     height:35vh;
    overflow:hidden;
    margin-bottom:20px;
`

const mapStateToProps =(state)=>{
    return {
        isMenuOpen:state.isMenuOpen
    }
}


export default connect(mapStateToProps)(MobileEntries)
