import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/entries/kuchnia_bytom_b2/AB_B2_1.jpg";
import img2 from "../../../images/entries/kuchnia_bytom_b2/AB_B2_2.jpg";
import img3 from "../../../images/entries/kuchnia_bytom_b2/AB_B2_3.jpg";


const KuchniaBytomB2 = () => {
  return (
    <SingleProject
    projectName="Kuchnia w kamienicy B2"
    company="A+B ARCHITEKTURA"
    authors="Anna Wilk-Tokarczyk, Beata Kosok"
    location="Bytom"
    project="2016"
    realization="2017"
    size="14"
      arrayOfImages={[img1, img2, img3]}
    />
  );
};

export default KuchniaBytomB2;