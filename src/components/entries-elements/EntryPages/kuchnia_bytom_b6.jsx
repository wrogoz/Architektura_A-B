import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/entries/kuchnia_bytom_b6/AB_B6_1.jpg";
import img2 from "../../../images/entries/kuchnia_bytom_b6/AB_B6_2.jpg";
import img3 from "../../../images/entries/kuchnia_bytom_b6/AB_B6_3.jpg";


const KuchniaBytomB6 = () => {
  return (
    <SingleProject
    projectName="Kuchnia B6"
    company="A+B ARCHITEKTURA"
    authors="ANNA WILK-TOKARCZYK, BEATA KOSOK"
    location="Bytom"
    project="2017"
    realization="2017"
    size="7"
      arrayOfImages={[img1, img2, img3]}
    />
  );
};

export default KuchniaBytomB6;