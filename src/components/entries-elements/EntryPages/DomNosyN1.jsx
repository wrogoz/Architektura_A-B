import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/entries/nosy_N1/AB_N1_1.jpg";
import img2 from "../../../images/entries/nosy_N1/AB_N1_2.jpg";
import img3 from "../../../images/entries/nosy_N1/AB_N1_3.jpg";
import img4 from "../../../images/entries/nosy_N1/AB_N1_4.jpg";
import img5 from "../../../images/entries/nosy_N1/AB_N1_5.jpg";
import img6 from "../../../images/entries/nosy_N1/AB_N1_6.jpg";
import img7 from "../../../images/entries/nosy_N1/AB_N1_7.jpg";
import img8 from "../../../images/entries/nosy_N1/AB_N1_8.jpg";
import img9 from "../../../images/entries/nosy_N1/AB_N1_9.jpg";
import img10 from "../../../images/entries/nosy_N1/AB_N1_10.jpg";



const DomNosyN1 = () => {
  return (
    <SingleProject
      projectName="DOM JEDNORODZINNY N1"
      company="A+B ARCHITEKTURA"
      authors="Anna Wilk-Tokarczyk, Beata Kosok"
      location="NOSY"
      project="2019"
      realization="2019"
      size="114"
      arrayOfImages={[
        { imgSrc: img1, type: "horizontal" },
        { imgSrc: img2, type: "horizontal" },
        { imgSrc: img3, type: "horizontal" },
        { imgSrc: img4, type: "horizontal" },
        { imgSrc: img5, type: "horizontal" },
        { imgSrc: img6, type: "horizontal" },
        { imgSrc: img7, type: "horizontal" },
        { imgSrc: img8, type: "horizontal" },
        { imgSrc: img9, type: "horizontal" },
        { imgSrc: img10, type: "horizontal" },

      ]}
    />
  );
};

export default DomNosyN1;
