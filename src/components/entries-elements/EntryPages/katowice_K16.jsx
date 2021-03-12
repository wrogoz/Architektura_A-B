import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/entries/katowice_K16/AB_K16_1.jpg";
import img2 from "../../../images/entries/katowice_K16/AB_K16_2.jpg";
import img3 from "../../../images/entries/katowice_K16/AB_K16_3.jpg";
import img4 from "../../../images/entries/katowice_K16/AB_K16_4.jpg";
import img5 from "../../../images/entries/katowice_K16/AB_K16_5.jpg";
import img6 from "../../../images/entries/katowice_K16/AB_K16_6.jpg";
import img7 from "../../../images/entries/katowice_K16/AB_K16_7.jpg";





const KatowiceK16 = () => {
  return (
    <SingleProject
      projectName="Mieszkanie K16"
      company="A+B ARCHITEKTURA"
      authors="Anna Wilk-Tokarczyk, Beata Kosok"
      location="Katowice"
      project="2015"
      realization="2015"
      size="63"

      arrayOfImages={[
        { imgSrc: img1, type: "vertical" },
        { imgSrc: img2, type: "vertical" },
        { imgSrc: img3, type: "vertical" },
        { imgSrc: img4, type: "vertical" },
        { imgSrc: img5, type: "vertical" },
        { imgSrc: img6, type: "vertical" },
        { imgSrc: img7, type: "horizontal" },


      ]}
    />
  );
};

export default KatowiceK16;
