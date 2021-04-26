import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/entries/kuchnia_bytom_b2/AB_B2_1.jpg";
import img2 from "../../../images/entries/kuchnia_bytom_b2/AB_B2_2.jpg";
import img3 from "../../../images/entries/kuchnia_bytom_b2/AB_B2_3.jpg"; 
import img4 from "../../../images/entries/kuchnia_bytom_b2/AB_B2_4.JPG";
import img5 from "../../../images/entries/kuchnia_bytom_b2/AB_B2_5.JPG";
import img6 from "../../../images/entries/kuchnia_bytom_b2/AB_B2_6.JPG";
import img7 from "../../../images/entries/kuchnia_bytom_b2/AB_B2_7.JPG";
import img8 from "../../../images/entries/kuchnia_bytom_b2/AB_B2_8.jpg";
import img9 from "../../../images/entries/kuchnia_bytom_b2/AB_B2_9.jpg";
import img10 from "../../../images/entries/kuchnia_bytom_b2/AB_B2_10.jpg";


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
      photograph="Katarzyna Leśniok"
      arrayOfImages={[
        { imgSrc: img1, type: "horizontal" },
        { imgSrc: img2, type: "vertical" },
        { imgSrc: img3, type: "vertical"  },
        { imgSrc: img4, type: "vertical"  },
        { imgSrc: img5, type: "vertical"  },
        { imgSrc: img6, type: "horizontal" },
        { imgSrc: img7, type: "horizontal" },
        { imgSrc: img8, type: "horizontal" },
        { imgSrc: img9, type: "horizontal" },
        { imgSrc: img10, type: "horizontal" },

      ]}
    />
  );
};


export default KuchniaBytomB2;