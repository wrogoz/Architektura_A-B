import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";

import img1 from "../../../images/entries/zabrze_Z10/AB_ZW10_1.jpg";
import img2 from "../../../images/entries/zabrze_Z10/AB_ZW10_2.jpg";
import img3 from "../../../images/entries/zabrze_Z10/AB_ZW10_3.jpg";
import img4 from "../../../images/entries/zabrze_Z10/AB_ZW10_4.jpg";
import img5 from "../../../images/entries/zabrze_Z10/AB_ZW10_5.jpg";
import img6 from "../../../images/entries/zabrze_Z10/AB_ZW10_6.jpg";
import img7 from "../../../images/entries/zabrze_Z10/AB_ZW10_7.jpg";
import img8 from "../../../images/entries/zabrze_Z10/AB_ZW10_8.jpg";
import img9 from "../../../images/entries/zabrze_Z10/AB_ZW10_9.jpg";
import img10 from "../../../images/entries/zabrze_Z10/AB_ZW10_10.jpg";
import img11 from "../../../images/entries/zabrze_Z10/AB_ZW10_11.jpg";
import img12 from "../../../images/entries/zabrze_Z10/AB_ZW10_12.jpg";
import img13 from "../../../images/entries/zabrze_Z10/AB_ZW10_13.jpg";


const DomZabrzeZ10 = () => {
  return (
    <SingleProject
      projectName="DOM JEDNORODZINNY Z10"
      company="A+B ARCHITEKTURA"
      authors="Anna Wilk-Tokarczyk, Beata Kosok"
      location="Zabrze"
      project="2020"
      realization="2020/21"
      size="186"
      arrayOfImages={[
        { imgSrc: img1, type: "horizontal" },
        { imgSrc: img2, type: "horizontal" },
        { imgSrc: img3, type: "horizontal" },
        { imgSrc: img4, type: "horizontal" },
        { imgSrc: img5, type: "horizontal" },
        { imgSrc: img6, type: "vertical" },
        { imgSrc: img7, type: "vertical" },
        { imgSrc: img8, type: "horizontal" },
        { imgSrc: img9, type: "horizontal" },
        { imgSrc: img10, type: "horizontal" },
        { imgSrc: img11, type: "horizontal" },
        { imgSrc: img12, type: "horizontal" },
        { imgSrc: img13, type: "horizontal" },

      ]}
    />
  );
};

export default DomZabrzeZ10;
