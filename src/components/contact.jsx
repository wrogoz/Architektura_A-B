import React from 'react'
import styled from 'styled-components'
import Footer from './footer'
const Contact =()=>{
    return(
        <ContactSection>
            <p>Contact page</p>
            <Footer/>
        </ContactSection>
    )
}


const ContactSection = styled.section`
    height:70vh;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:40px;
`

export default Contact;