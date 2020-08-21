import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import styled from 'styled-components'
const Footer =()=>{
    return(
        <FooterRow>
            <FooterCol>
                <SocialIcon className="fab fa-facebook-square fa-2x" ></SocialIcon>
                <SocialIcon  className="fab fa-instagram fa-2x"></SocialIcon>
         </FooterCol>
        </FooterRow>
       
       
    )
}
const FooterRow = styled(Row)`
 margin:5% 0;

 display:flex;
 flex-flow: column;
  flex-grow:1;
`
const FooterCol = styled(Col)`
  display:flex;
  justify-content:center;
  align-items:center;
  align-content:stretch;
  
`

const SocialIcon = styled.i`
    margin-left:20px;
        margin-top: auto;
`
export default Footer