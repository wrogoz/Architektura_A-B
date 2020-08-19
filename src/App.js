import React from 'react';
import GlobalFonts from './assets/fonts/inter/fonts'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

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
          <main> wnętrza  </main>
        </Route>

        <Route path="/kontakt">
          <main>kontakt  </main>
        </Route>

        <Route  path="/">
        <main> main 1st page  </main>
        </Route>
      </Switch>

      
      <footer>
        footer
      </footer>
    </StyledContainer>
  );
}



const StyledContainer = styled(Container)`
  background-color:grey;
  padding-top:10px;
  height:100vh;
  font-family:interblack;
  text-transform:uppercase;
`

export default App;
