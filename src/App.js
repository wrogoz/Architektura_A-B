import React from "react";
import {GlobalStyles} from "./globalStyles";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import HomePage from "./components/homePage";
import Entries from "./components/entries";

import Architecture from "./components/architecture";
import Bathroom from "./components/entries-elements/singleEntriesProjects/bathroom";
import SwimmingPool from "./components/architecture-elements/singleArchitectureProjects/swimmingPool";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Contact from './components/contact'

function App() {
  return (
    <StyledContainer fluid>
      <GlobalStyles />

      <Header />

      <Switch>
        <Route path="/projekty">
          <Architecture />
          <Entries />
        </Route>

        <Route exact path="/architecture/swimmingPool">
          <SwimmingPool />
        </Route>

        <Route path="/architecture">
          <Architecture />
        </Route>
        

        <Route exact path="/entries/bathroom">
          <Bathroom />
        </Route>
        <Route path="/entries">
          <Entries />
        </Route>

        <Route path="/kontakt">
          < Contact/>
        </Route>

        <Route path="/">
          <HomePage />
        </Route>
        <Route path="*" >
          <HomePage/>
        </Route>
      </Switch>

     
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  padding: 10px;
 
  font-family: interblack;
  display: flex;

  
  min-height: 100vh;
  flex-direction: column;
  font-size: 0.7rem;
  @media(min-width:800px){
    padding:15px;
  }
`;

export default App;
