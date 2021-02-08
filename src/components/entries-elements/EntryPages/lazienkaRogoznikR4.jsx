import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/entries/lazienka_rogoźnik_R4/AB_RL4_1.jpg";
import img2 from "../../../images/entries/lazienka_rogoźnik_R4/AB_RL4_2.jpg";
import img3 from "../../../images/entries/lazienka_rogoźnik_R4/AB_RL4_3.jpg";



const LazienkaRogoznikR4 = () => {
  return (
    <SingleProject
    projectName="Kuchnia w kamienicy B2"
    authors="A+B ARCHITEKTURA (ANNA WILK-TOKARCZYK, BEATA KOSOK)"
    location="Bytom"
    project="2016"
    realization="2017"
    size="14"
      arrayOfImages={[img1, img2, img3]}
    />
  );
};

export default LazienkaRogoznikR4;