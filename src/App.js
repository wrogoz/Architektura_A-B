import React from "react";
import { GlobalStyles } from "./globalStyles";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import HomePage from "./components/homePage";
import Entries from "./components/entries";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Contact from "./components/contact";
import Architecture from "./components/architecture";
// ENTRY IMPORTS
import ApartamentKatowiceK18 from "./components/entries-elements/EntryPages/apartamentKatowiceK18.jsx";
import DomNosyN1 from "./components/entries-elements/EntryPages/DomNosyN1";
import MieszkanieKatowiceK2 from "./components/entries-elements/EntryPages/mieszkanieKatowiceK2";
import MieszkanieKatowiceK17 from "./components/entries-elements/EntryPages/mieszkanieKatowiceK17";
import DomPsaryP7 from "./components/entries-elements/EntryPages/domPsaryP7";
import KatowiceK16 from "./components/entries-elements/EntryPages/katowice_K16";
import DomZabrzeZ10 from "./components/entries-elements/EntryPages/zabrzeZ10";
import DomOrzeszeO1 from "./components/entries-elements/EntryPages/orzeszeO1";
import KuchniaBytomB6 from "./components/entries-elements/EntryPages/kuchnia_bytom_b6";
import WarszawaW1 from "./components/entries-elements/EntryPages/warszawaW1";
import LazienkaWarszawaW6 from "./components/entries-elements/EntryPages/warszawaW6";
import KatowiceK11 from "./components/entries-elements/EntryPages/katowice_K11";
import DomLaziskaL31 from "./components/entries-elements/EntryPages/laziskaL31";
import KuchniaKatowiceK25 from "./components/entries-elements/EntryPages/katowiceK25";
import MieszkanieKatowiceK22 from "./components/entries-elements/EntryPages/katowiceK22";
import SalonRogoznikR4 from "./components/entries-elements/EntryPages/salonRogoznikR4";
import LazienkaRogoznikR4 from "./components/entries-elements/EntryPages/lazienkaRogoznikR4";
import KuchniaBytomB2 from "./components/entries-elements/EntryPages/kuchnia_bytom_b2";
import DomJednorodzinnyC7 from "./components/entries-elements/EntryPages/domCieszynC7";
import KatowiceK36 from "./components/entries-elements/EntryPages/katowiceK36";
// ARCHITECTURE IMPORTS
import ArchitectureAndrychowA6 from "./components/architecture-elements/ArchitecturePages/architectureAndrychowA6";
import ArchitecturePsaryP7 from "./components/architecture-elements/ArchitecturePages/architecturePsaryP7";
import ArchitectureZabrzeZ10 from "./components/architecture-elements/ArchitecturePages/architectureZabrzeZ10";
import ArchitectureBasenyK8 from "./components/architecture-elements/ArchitecturePages/architectureBasenyK8";

// ALL PROJECTS LIST
import AllProjects from "./components/allProjects";

function App() {
 
  
  return (
    <StyledContainer fluid>
      <GlobalStyles />

      <Header />
      <ContentWrapper>
        <Switch>
          <Route path="/projekty">
            <AllProjects />
          </Route>
          {/* ARCHITECTURE ROUTES */}

          <Route exact path="/architecture/andrychow_A6">
            <ArchitectureAndrychowA6 />
          </Route>

          <Route exact path="/architecture/zabrze_Z10">
            <ArchitectureZabrzeZ10 />
          </Route>
          <Route exact path="/architecture/baseny_k8">
            <ArchitectureBasenyK8 />
          </Route>

          <Route exact path="/architecture/psary_P7">
            <ArchitecturePsaryP7 />
          </Route>

          <Route path="/architecture">
            <Architecture />
          </Route>
          {/* ENTRY ROUTES */}
          <Route exact path="/entries/apartament_katowice_k18">
            <ApartamentKatowiceK18 />
          </Route>

          <Route exact path="/entries/dom_jednorodzinny_nosy_n1">
            <DomNosyN1 />
          </Route>

          <Route exact path="/entries/mieszkanie_katowice_k2">
            <MieszkanieKatowiceK2 />
          </Route>

          <Route exact path="/entries/mieszkanie_katowice_k17">
            <MieszkanieKatowiceK17 />
          </Route>

          <Route exact path="/entries/dom_jednorodzinny_psary_p7">
            <DomPsaryP7 />
          </Route>

          <Route exact path="/entries/katowice_K16">
            <KatowiceK16 />
          </Route>

          <Route exact path="/entries/dom_jednorodzinny_zabrze_z10">
            <DomZabrzeZ10 />
          </Route>

          <Route exact path="/entries/dom_jednorodzinny_orzesze_O1">
            <DomOrzeszeO1 />
          </Route>

          <Route exact path="/entries/kuchnia_bytom_B2">
            <KuchniaBytomB2 />
          </Route>

          <Route exact path="/entries/warszawa_W1">
            <WarszawaW1 />
          </Route>

          <Route exact path="/entries/lazienka_warszawa_W6">
            <LazienkaWarszawaW6 />
          </Route>

          <Route exact path="/entries/katowice_K11">
            <KatowiceK11 />
          </Route>

          <Route exact path="/entries/dom_laziska_L31">
            <DomLaziskaL31 />
          </Route>

          <Route exact path="/entries/kuchnia_katowice_K25">
            <KuchniaKatowiceK25 />
          </Route>

          <Route exact path="/entries/salon_rogoznik_R4">
            <SalonRogoznikR4 />
          </Route>

          <Route exact path="/entries/lazienka_Rogoznik_R4">
            <LazienkaRogoznikR4 />
          </Route>

          <Route exact path="/entries/kuchnia_bytom_b6">
            <KuchniaBytomB6 />
          </Route>

          <Route exact path="/entries/domCieszynC7">
            <DomJednorodzinnyC7 />
          </Route>

          <Route exact path="/entries/katowice_K36">
            <KatowiceK36 />
          </Route>
          <Route exact path="/entries/mieszkanie_katowice_K22">
            <MieszkanieKatowiceK22 />
          </Route>

          <Route path="/entries">
            <Entries />
          </Route>

          <Route path="/kontakt">
            <Contact />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <HomePage />
          </Route>
        </Switch>
      </ContentWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  padding: 10px;
  padding-bottom: 0;
  font-family: interblack;
  display: flex;
 
  scrollbar-width:none;
  min-height: 100vh;
  flex-direction: column;
  font-size: 0.7rem;
  @media (min-width: 800px) {
    padding: 0 15px;
  }
`;
const ContentWrapper = styled.div`
  @media (min-width: 800px) {
    margin-top: 80px;
    
  }
`;
export default App;
