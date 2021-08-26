import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/entries/katowice_K22/AB_K22_1.jpg";
import img2 from "../../../images/entries/katowice_K22/AB_K22_2.jpg";
import img3 from "../../../images/entries/katowice_K22/AB_K22_3.jpg";


const MieszkanieKatowiceK22 = () => {
  return (
    <SingleProject
      projectName="Mieszkanie K22"
      company="A+B ARCHITEKTURA"
      authors="Anna Wilk-Tokarczyk, Beata Kosok"
      location="Katowice"
      project="2018"
    
      size="72"
      arrayOfImages={[
        { imgSrc: img1, type: "horizontal" },
        { imgSrc: img2, type: "horizontal" },
        { imgSrc: img3, type: "horizontal" },

      ]}
    />
  );
};


export default MieszkanieKatowiceK22;