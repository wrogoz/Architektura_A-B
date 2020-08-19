import React from 'react'
import styled from 'styled-components'
import Col from 'react-bootstrap/Col'
const MobileMenu = ()=>{
    return(
        <Nav xs={12}>
            <ul>
                <li>Projekty</li>
                <li>Architektura</li>
                <li>Wnętrza</li>
                <li>Kontakt</li>
            </ul>
    </Nav>
    )
}

const Nav = styled(Col)`
    display:flex;
    justify-content:center;
    ul{
        display:flex;
        flex-direction:column;
        list-style:none;
    }
`

export default MobileMenu