import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/entries/katowice_K2/AB_K2_1.jpg"
import img2 from "../../../images/entries/katowice_K2/AB_K2_2.jpg"
import img3 from "../../../images/entries/katowice_K2/AB_K2_3.jpg"
import img4 from "../../../images/entries/katowice_K2/AB_K2_4.jpg"
import img5 from "../../../images/entries/katowice_K2/AB_K2_5.jpg"
import img6 from "../../../images/entries/katowice_K2/AB_K2_6.jpg"
import img7 from "../../../images/entries/katowice_K2/AB_K2_7.jpg"
import img8 from "../../../images/entries/katowice_K2/AB_K2_8.jpg"
import img9 from "../../../images/entries/katowice_K2/AB_K2_9.jpg"






const MieszkanieKatowiceK2 = () => {
  return (
    <SingleProject
      projectName="Mieszkanie K2"
      company="A+B ARCHITEKTURA"
      authors="Anna Wilk-Tokarczyk, Beata Kosok"
      location="Katowice"
      project="2020"
      realization="2020/21"
      size="49"

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


      ]}
    />
  );
};

export default MieszkanieKatowiceK2;
