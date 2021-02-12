import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/entries/dom_jednorodzinny_psary_P7/AB_PW7_1.jpg";
import img2 from "../../../images/entries/dom_jednorodzinny_psary_P7/AB_PW7_2.jpg";
import img3 from "../../../images/entries/dom_jednorodzinny_psary_P7/AB_PW7_3.jpg";
import img4 from "../../../images/entries/dom_jednorodzinny_psary_P7/AB_PW7_4.jpg";
import img5 from "../../../images/entries/dom_jednorodzinny_psary_P7/AB_PW7_5.jpg";
import img6 from "../../../images/entries/dom_jednorodzinny_psary_P7/AB_PW7_6.jpg";
import img7 from "../../../images/entries/dom_jednorodzinny_psary_P7/AB_PW7_7.jpg";
import img8 from "../../../images/entries/dom_jednorodzinny_psary_P7/AB_PW7_8.jpg";
import img9 from "../../../images/entries/dom_jednorodzinny_psary_P7/AB_PW7_9.jpg";
import img10 from "../../../images/entries/dom_jednorodzinny_psary_P7/AB_PW7_10.jpg";
import img11 from "../../../images/entries/dom_jednorodzinny_psary_P7/AB_PW7_11.jpg";
import img12 from "../../../images/entries/dom_jednorodzinny_psary_P7/AB_PW7_12.jpg";
import img13 from "../../../images/entries/dom_jednorodzinny_psary_P7/AB_PW7_13.jpg";
import img14 from "../../../images/entries/dom_jednorodzinny_psary_P7/AB_PW7_14.jpg";

const DomPsaryP7 = () => {
  return (
    <SingleProject
      projectName="DOM JEDNORODZINNY P7"
      company="A+B ARCHITEKTURA"
      authors="Anna Wilk-Tokarczyk, Beata Kosok"
      location="Psary"
      project="2014"
      realization="2015"
      size="183"
      arrayOfImages={[
        { imgSrc: img1, type: "vertical" },
        { imgSrc: img2, type: "vertical" },
        { imgSrc: img3, type: "vertical" },
        { imgSrc: img4, type: "horizontal" },
        { imgSrc: img5, type: "vertical" },
        { imgSrc: img6, type: "vertical" },
        { imgSrc: img7, type: "horizontal" },
        { imgSrc: img8, type: "horizontal" },
        { imgSrc: img9, type: "horizontal" },
        { imgSrc: img10, type: "horizontal" },
        { imgSrc: img11, type: "horizontal" },
        { imgSrc: img12, type: "horizontal" },
        { imgSrc: img13, type: "horizontal" },
        { imgSrc: img14, type: "horizontal" },
      ]}
    />
  );
};

export default DomPsaryP7;
