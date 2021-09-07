import React from "react";
import styled from "styled-components";
import portrait from "../images/contact/AB.jpg";
const Contact = () => {
  return (
    <ContactSection>
      <div className="photos">
        <img src={portrait} alt="portrait" />
      </div>
      <div className="descriptionBox">
        <PersonalData>
          <h5>Anna Wilk-Tokarczyk</h5>
          <p>
            tel: <span>+48 533 085 552</span>
          </p>
          <p>
            email: <span>wilk@aplusb.pl</span>
          </p>
        </PersonalData>
        <PersonalData>
          <h5>Beata Kosok</h5>
          <p>
            tel: <span>+48 504 292 703</span>
          </p>
          <p>
            email: <span>kosok@aplusb.pl</span>
          </p>
          <p>
            Uprawnienia budowlane w spec. arch. do projektowania bez ograniczeń.</p>
          <p>Członek Śląskiej Izby Architektów.</p>  
          
        </PersonalData>
        <div className="description">
          <h5 className="chapter">O nas</h5>
          <p>
            A+B Architektura to autorska pracownia projektowa tworzona przez
            Annę Wilk – Tokarczyk oraz Beatę Kosok od 2014r. Powstanie pracowni
            poprzedziły lata zdobywania wiedzy i doświadczenia w śląskich
            biurach projektowych, studia na Wydziale Architektury Politechniki
            Śląskiej oraz wiele zrealizowanych wspólnie projektów. Projektowanie
            jest naszą pasją, każde zadanie jest dla nas nowym wyzwaniem do
            którego podchodzimy indywidualnie. Uważnie wsłuchujemy się w
            potrzeby Inwestora, poznajemy oczekiwania, a dzięki naszej wiedzy i
            doświadczeniu potrafimy przekształcić wizję w rzeczywistość. W
            naszej pracy kładziemy nacisk na wysoką funkcjonalność rozwiązań,
            estetykę, a do projektowanych przestrzeni podchodzimy z zachowaniem
            kontekstu otoczenia. W celu zapewnienia kompleksowej usługi
            współpracujemy z doświadczonymi projektantami branżowymi.
          </p>
          <p className="chapter">ARCHITEKTURA</p>
          <p>
            Zajmujemy się projektowaniem budynków o różnej skali i funkcji, od
            projektów domów jednorodzinnych po obiekty komercyjne i użyteczności
            publicznej.Opracowujemy inwentaryzacje budowlane. Zakres prac
            projektowych obejmuje: projekty koncepcyjne, projekty budowlane i
            wykonawcze oraz nadzory autorskie.
          </p>
          <p className="chapter">WNĘTRZA</p>
          <p>
            Oferujemy kompleksowy zakres usług związanych z projektowaniem
            wnętrz oraz nadzorem nad ich realizacją. Szczegółowość projektu
            dostosowana jest do indywidualnych potrzeb Klienta.
          </p>
        </div>
      </div>
      <Maker>
        <p>Copyrights Wojciech Rogóż 2021</p>
      </Maker>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  display: grid;
  margin-top: auto;
  justify-content: center;
  grid-template-columns:
    1fr [photos-start]minmax(200px, 35vw) [photos-end description-start] minmax(
      200px,
      35vw
    )
    [description-end] 1fr;
  grid-template-rows: auto [footer-start]1fr[footer-end];
  min-height: calc(100vh - 100px);
  margin-top: auto;
  margin-bottom: 0;

  font-size: 0.9rem;
  @media (max-width: 550px) {
    grid-template-columns:
      1fr [photos-start description-start]minmax(150px, 70vw)
      [photos-end description-end] 1fr;
    grid-template-rows: 35vh 1fr [footer-start]1fr[footer-end];
    grid-row-gap: 1rem;
    
  }
  @media (max-width: 1000px) {
    height: 100vh;
  }

  div.photos {
    grid-column: photos-start/photos-end;
    grid-row: 1/2;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    @media (max-width: 550px) {
      justify-content: center;
      align-items: center;
    }
    @media (max-height: 400px) {
      grid-row: 1/2;
    }
    img {
      @media (max-width: 550px) {
        width:  90%;
      }
      width: 65%;
    }
  }
  div.descriptionBox {
    grid-column: description-start/description-end;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    padding: 0 2vh;

    ::-webkit-scrollbar {
      display: none;
    }
    h5 {
      font-size: 1.15rem;
    }
    @media (max-width: 550px) {
      grid-row: 2/3;
      padding-left: 0;
    }
  }
  div.description {
    display: flex;
    flex-direction: column;

    .chapter {
      margin-bottom: 0;
      padding: 10px 0;
    }
    p {
      line-height: 17px;
    }
  }
`;

const PersonalData = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2vh;

  p {
    padding: 0;
    margin: 0;
  }
`;
const Maker = styled.section`
  grid-column: 1/-1;
  grid-row: footer-start/footer-end;

  align-self: end;
  min-height: 50px;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-height: 400px) {
    grid-row: footer-start/footer-end;
  }
  @media (max-width: 768px) {
    align-items: center;
  }
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
    margin-bottom: 5px;
  }
`;
export default Contact;
