import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col'
import {Image} from 'react-bootstrap'
import {connect} from 'react-redux'
import {showHideMobileMenu} from '../../../redux/actions'

const MobileProjectElement = (props)=>{

    const hideMobileMenu = () => {
        if (props.isMenuOpen) {
          props.dispatch(showHideMobileMenu());
        }
      };
    return(
        <Col sm={12}>
        <Link to={props.path} onClick={hideMobileMenu}>

          <ImgBox>
            <Img src={props.imgSrc} rounded />
            <Mask>
            <p>{props.title}</p>
            </Mask>

          </ImgBox>
        </Link>
      </Col>
    )
}

const Img = styled(Image)`
  width: 100%;

  padding: 0 10px;
  @media(orientation:landscape ){
    width:50%;
  }
`;
const ImgBox = styled.div`
  position:relative;
  overflow: hidden;
  margin:10px 0;
  display:flex;
  align-items:flex-start;
  justify-content:center;
  @media(orientation:landscape ){
    height:auto;
    display:flex;
    justify-content:center;

  }
  p{

    font-size:0.85rem;
    text-transform:uppercase;
    color:#fff;
    font-weight:bold;
    text-align:center;
    letter-spacing:1px;
    margin:0;


  }
`;
const Mask = styled.div`
  position:absolute;
  height:100%;
  width:94%;
  background-color:rgba(0,0,0,0.2);
  display:flex;
  align-items:center;
  justify-content:center;
  padding:0 15px;
`

const mapStateToProps = (state)=>{
    return {
        isMenuOpen:state.isMenuOpen
    }
}

export default connect(mapStateToProps)(MobileProjectElement)