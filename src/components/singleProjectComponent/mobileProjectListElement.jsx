import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col'
import {Image} from 'react-bootstrap'
import {connect} from 'react-redux'
import {showHideMobileMenu} from '../../redux/actions'
const MobileProjectElement = (props)=>{

    const hideMobileMenu = () => {
        if (props.isMenuOpen) {
          props.dispatch(showHideMobileMenu());
        }
      };
    return(
        <Col sm={12}>
        <Link to={`/entries/${props.path}`} onClick={hideMobileMenu}>
    <ProjectTitle>{props.title}</ProjectTitle>
          <ImgBox>
            <Img src={props.imgSrc} rounded />
          </ImgBox>
        </Link>
      </Col>
    )
}
const ProjectTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: #000;
  letter-spacing: 4px;
  text-transform: uppercase;
`;
const Img = styled(Image)`
  width: 100%;
  margin-top: -18%;
  padding: 0 10px;
`;
const ImgBox = styled.div`
  height: 35vh;
  overflow: hidden;
  margin-bottom: 20px;
`;

const mapStateToProps = (state)=>{
    return {
        isMenuOpen:state.isMenuOpen
    }
}

export default connect(mapStateToProps)(MobileProjectElement)