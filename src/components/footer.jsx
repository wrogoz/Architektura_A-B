import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
const Footer = () => {
  return (
    <FooterRow>
      <FooterCol>
        <SocialIcon className="fab fa-facebook-square fa-2x"></SocialIcon>
        <SocialIcon className="fab fa-instagram fa-2x"></SocialIcon>
      </FooterCol>
    </FooterRow>
  );
};
const FooterRow = styled(Row)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  flex-grow: 1;

  @media (min-width: 800px) {
    margin: 0;
    margin-top: 2%;
    max-height: none;
  }
`;
const FooterCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialIcon = styled.i`
  margin-left: 20px;
`;
export default Footer;
