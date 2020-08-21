import React from 'react';
import GlobalFonts from './assets/fonts/inter/fonts'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import HomePage from './components/homePage'
import Entries from './components/entries'
import Footer from './components/footer'
import Architecture from './components/architecture'
import Bathroom from './components/entries-elements/singleEntriesProjects/bathroom';
import SwimmingPool from './components/architecture-elements/singleArchitectureProjects/swimmingPool'
import {
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header'
function App() {
  return (
    <StyledContainer fluid>
      <GlobalFonts/>

      <Header/>

      <Switch>
        

        <Route path="/projekty">
        <Architecture />
        <Entries/>

        </Route>
        <Route exact path="/architecture/swimmingPool">
          <SwimmingPool/>
        </Route>
        <Route path="/architecture">
          <Architecture />
        </Route>

        <Route exact path="/entries/bathroom">
          <Bathroom/>
        </Route>
        <Route path="/entries">
          <Entries/>
        </Route>

        <Route path="/kontakt">
          <main>kontakt  </main>
        </Route>

        <Route  path="/">
        <HomePage/>
        </Route>
      </Switch>

      <Footer/>
    </StyledContainer>
  );
}



const StyledContainer = styled(Container)`
  padding:10px;
  min-height:100vh;
  font-family:interblack;
  display:flex;
  flex-direction:column;
  font-size:0.7rem;
`

export default App;
