import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";

import img1 from "../../../images/entries/laziska_L31/AB_L31_1.jpg";
import img2 from "../../../images/entries/laziska_L31/AB_L31_2.jpg";
import img3 from "../../../images/entries/laziska_L31/AB_L31_3.jpg";
import img4 from "../../../images/entries/laziska_L31/AB_L31_4.jpg";
import img5 from "../../../images/entries/laziska_L31/AB_L31_5.jpg";
import img6 from "../../../images/entries/laziska_L31/AB_L31_6.jpg";
import img7 from "../../../images/entries/laziska_L31/AB_L31_7.jpg";
import img8 from "../../../images/entries/laziska_L31/AB_L31_8.jpg";
import img9 from "../../../images/entries/laziska_L31/AB_L31_9.jpg";
import img10 from "../../../images/entries/laziska_L31/AB_L31_10.jpg";
import img11 from "../../../images/entries/laziska_L31/AB_L31_11.jpg";






const DomLaziskaL31 = () => {
  return (
    <SingleProject
      projectName="Dom jednorodzinny Ł31"
      company="A+B ARCHITEKTURA"
      authors="Anna Wilk-Tokarczyk, Beata Kosok"
      location="Łaziska Górne"
      project="2020"
      realization="2020"
      size="107"
      arrayOfImages={[
        { imgSrc: img1, type: "horizontal" },
        { imgSrc: img2, type: "horizontal" },
        { imgSrc: img3, type: "horizontal" },
        { imgSrc: img4, type: "vertical" },
        { imgSrc: img5, type: "vertical" },
        { imgSrc: img6, type: "horizontal" },
        { imgSrc: img7, type: "horizontal" },
        { imgSrc: img8, type: "horizontal" },
        { imgSrc: img9, type: "horizontal" },
        { imgSrc: img10, type: "horizontal" },
        { imgSrc: img11, type: "horizontal" },

      ]}
    />
  );
};

export default DomLaziskaL31;
