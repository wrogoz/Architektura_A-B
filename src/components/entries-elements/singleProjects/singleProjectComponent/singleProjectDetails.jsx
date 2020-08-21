import React from 'react';
import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


const SingleProject = (props)=> {

       const imageList= props.arrayOfImages.map((el,i)=>{
           return (
                <SingleProjectCol xs={12}>
                 <Img key={i} src={el}/>
               </SingleProjectCol>
           )
       })


    return(
        <Row>

           <SingleProjectCol>
    
    <DescriptionBox>    
        <Title>{props.projectName}</Title>
        <p>Lokalizacja:{props.location}</p>
        <p>Klient:{props.client}</p>
        <p>Powierzchnia:{props.size} m<sup>2</sup></p>
        <p>Status:{props.status} </p>
        <p>Autorzy:{props.authors} </p>
    </DescriptionBox>
    </SingleProjectCol>
    
        {imageList}
 
        </Row>
    )
}

const SingleProjectCol = styled(Col)`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Title = styled.h3`
    font-size:1rem;
    font-weight:bold;
    text-transform:uppercase;
    letter-spacing:4px;

`
const DescriptionBox = styled.section`
    display:flex;
    flex-direction:column;
    p{
        margin:0;
        font-size: 0.9rem;
        line-height: 25px;
    }
`

const Img = styled(Image)`
     width: 100%;
        margin-top:-18%;
        padding:0 10px;
        
`
export default SingleProject