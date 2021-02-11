import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactSection>
      <ContactDetails>
        <p>Contact page</p>
      </ContactDetails>

      <Maker>
        <p>Created by wrogoz@gmail.com 2020</p>
      </Maker>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 20px;
  height: 80vh;
  margin-top: auto;
  margin-bottom: 0;
  padding-bottom: 0;
`;
const ContactDetails = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  height: 90%;
  display:flex;
  align-items:center;
  justify-content:center;
`;
const Maker = styled.section`
  grid-column: 1/1;
  grid-row: 2/3;

  display: flex;
  justify-content: center;
  p {
    width: 100%;
    color: #555;
    text-align: center;
    font-size: 10px;
  }
  p:before {
    content: "";
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(153, 153, 153, 1) 50%,
      rgba(255, 255, 255, 1) 100%
    );
    display: block;
    height: 1px;
    width: 100%;
  }
`;
export default Contact;
