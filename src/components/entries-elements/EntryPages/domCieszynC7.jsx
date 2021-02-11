import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/entries/dom_jednorodzinny_cieszyn_c7/AB_C7_1.jpg";
import img2 from "../../../images/entries/dom_jednorodzinny_cieszyn_c7/AB_C7_2.jpg";
import img3 from "../../../images/entries/dom_jednorodzinny_cieszyn_c7/AB_C7_3.jpg";
import img4 from "../../../images/entries/dom_jednorodzinny_cieszyn_c7/AB_C7_4.jpg";
import img5 from "../../../images/entries/dom_jednorodzinny_cieszyn_c7/AB_C7_5.jpg";
import img6 from "../../../images/entries/dom_jednorodzinny_cieszyn_c7/AB_C7_6.jpg";
import img7 from "../../../images/entries/dom_jednorodzinny_cieszyn_c7/AB_C7_7.jpg";


const DomCieszynC7 = () => {
  return (
    <SingleProject
      projectName="DOM JEDNORODZINNY C7"
      company="A+B ARCHITEKTURA"
      authors="ANNA WILK-TOKARCZYK, BEATA KOSOK"
      location="CIESZYN"
      project="2017"
      realization="2017/18"
      size="160"


      arrayOfImages={[img1, img2, img3, img4, img5,img6,img7]}
    />
  );
};

export default DomCieszynC7;
