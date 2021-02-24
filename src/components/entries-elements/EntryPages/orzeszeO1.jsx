import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";

import img1 from "../../../images/entries/orzesze_O1/AB_O1_1.jpg";
import img2 from "../../../images/entries/orzesze_O1/AB_O1_2.jpg";
import img3 from "../../../images/entries/orzesze_O1/AB_O1_3.jpg";
import img4 from "../../../images/entries/orzesze_O1/AB_O1_4.jpg";
import img5 from "../../../images/entries/orzesze_O1/AB_O1_5.jpg";
import img6 from "../../../images/entries/orzesze_O1/AB_O1_6.jpg";
import img7 from "../../../images/entries/orzesze_O1/AB_O1_7.jpg";
import img8 from "../../../images/entries/orzesze_O1/AB_O1_8.jpg";
import img9 from "../../../images/entries/orzesze_O1/AB_O1_9.jpg";
import img10 from "../../../images/entries/orzesze_O1/AB_O1_10.jpg";
import img11 from "../../../images/entries/orzesze_O1/AB_O1_11.jpg";
import img12 from "../../../images/entries/orzesze_O1/AB_O1_12.jpg";
import img13 from "../../../images/entries/orzesze_O1/AB_O1_13.jpg";
import img14 from "../../../images/entries/orzesze_O1/AB_O1_14.jpg";
import img15 from "../../../images/entries/orzesze_O1/AB_O1_15.jpg";
import img16 from "../../../images/entries/orzesze_O1/AB_O1_16.jpg";




const DomOrzeszeO1 = () => {
  return (
    <SingleProject
      projectName="DOM JEDNORODZINNY O1"
      company="A+B ARCHITEKTURA"
      authors="Anna Wilk-Tokarczyk, Beata Kosok"
      location="Orzesze"
      project="2014"
      realization="2014"
      size="133"
      arrayOfImages={[
        { imgSrc: img1, type: "vertical" },
        { imgSrc: img2, type: "vertical" },
        { imgSrc: img3, type: "vertical" },
        { imgSrc: img4, type: "vertical" },
        { imgSrc: img5, type: "vertical" },
        { imgSrc: img6, type: "vertical" },
        { imgSrc: img7, type: "vertical" },
        { imgSrc: img8, type: "vertical" },
        { imgSrc: img9, type: "vertical" },
        { imgSrc: img10, type: "vertical" },
        { imgSrc: img11, type: "horizontal" },
        { imgSrc: img12, type: "horizontal" },
        { imgSrc: img13, type: "horizontal" },
        { imgSrc: img14, type: "horizontal" },
        { imgSrc: img15, type: "horizontal" },
        { imgSrc: img16, type: "horizontal" },

      ]}
    />
  );
};

export default DomOrzeszeO1;
