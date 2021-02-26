import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/entries/bytom_B6/AB_B6_1.jpg";
import img2 from "../../../images/entries/bytom_B6/AB_B6_2.jpg";
import img3 from "../../../images/entries/bytom_B6/AB_B6_3.jpg";


const KuchniaBytomB6 = () => {
  return (
    <SingleProject
      projectName="Kuchnia B6"
      company="A+B ARCHITEKTURA"
      authors="Anna Wilk-Tokarczyk, Beata Kosok"
      location="Bytom"
      project="2017"
      realization="2017"
      size="7"
      arrayOfImages={[
        { imgSrc: img1, type: "horizontal" },
        { imgSrc: img2, type: "horizontal" },
        { imgSrc: img3, type: "horizontal" },

      ]}
    />
  );
};


export default KuchniaBytomB6;