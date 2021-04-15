import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/entries/cieszyn_C7/AB_C7_1.jpg";
import img2 from "../../../images/entries/cieszyn_C7/AB_C7_2.jpg";
import img3 from "../../../images/entries/cieszyn_C7/AB_C7_3.jpg";
import img5 from "../../../images/entries/cieszyn_C7/AB_C7_5.jpg";
import img6 from "../../../images/entries/cieszyn_C7/AB_C7_6.jpg";
import img7 from "../../../images/entries/cieszyn_C7/AB_C7_7.jpg";




const DomCieszynC7 = () => {
  return (
    <SingleProject
      projectName="DOM JEDNORODZINNY C7"
      company="A+B ARCHITEKTURA"
      authors="Anna Wilk-Tokarczyk, Beata Kosok"
      location="CIESZYN"
      project="2017"
      realization="2017/18"
      size="160"
      arrayOfImages={[
        { imgSrc: img1, type: "horizontal" },
        { imgSrc: img2, type: "horizontal" },
        { imgSrc: img3, type: "horizontal" },
        { imgSrc: img5, type: "horizontal" },
        { imgSrc: img6, type: "horizontal" },
        { imgSrc: img7, type: "horizontal" },


      ]}
    />
  );
};

export default DomCieszynC7;
