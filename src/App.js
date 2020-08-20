import React from 'react';
import GlobalFonts from './assets/fonts/inter/fonts'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import HomePage from './components/homePage'
import Entries from './components/entries'
import Footer from './components/footer'
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
          <main> projekty  </main>
        </Route>

        <Route path="/architektura">
          <main> architektura  </main>
        </Route>

        <Route path="/wnętrza">
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
  text-transform:uppercase;
  font-size:0.7rem;
`

export default App;
