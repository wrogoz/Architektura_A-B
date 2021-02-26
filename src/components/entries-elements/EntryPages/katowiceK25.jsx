import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/entries/katowice_K25/AB_K25_1.jpg";
import img2 from "../../../images/entries/katowice_K25/AB_K25_2.jpg";
import img3 from "../../../images/entries/katowice_K25/AB_K25_3.jpg";


const KuchniaKatowiceK25 = () => {
  return (
    <SingleProject
      projectName="Kuchnia K25"
      company="A+B ARCHITEKTURA"
      authors="Anna Wilk-Tokarczyk, Beata Kosok"
      location="Katowice"
      project="2020"
      realization="2020"
      size="13"
      arrayOfImages={[
        { imgSrc: img1, type: "horizontal" },
        { imgSrc: img2, type: "horizontal" },
        { imgSrc: img3, type: "horizontal" },

      ]}
    />
  );
};


export default KuchniaKatowiceK25;