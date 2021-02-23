import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/entries/katowice_K17/AB_K17_1.jpg"
import img2 from "../../../images/entries/katowice_K17/AB_K17_2.jpg"
import img3 from "../../../images/entries/katowice_K17/AB_K17_3.jpg"
import img4 from "../../../images/entries/katowice_K17/AB_K17_4.jpg"
import img5 from "../../../images/entries/katowice_K17/AB_K17_5.jpg"
import img6 from "../../../images/entries/katowice_K17/AB_K17_6.jpg"
import img7 from "../../../images/entries/katowice_K17/AB_K17_7.jpg"
import img8 from "../../../images/entries/katowice_K17/AB_K17_8.jpg"
import img9 from "../../../images/entries/katowice_K17/AB_K17_9.jpg"
import img10 from "../../../images/entries/katowice_K17/AB_K17_10.jpg"
import img11 from "../../../images/entries/katowice_K17/AB_K17_11.jpg"






const MieszkanieKatowiceK17 = () => {
  return (
    <SingleProject
      projectName="Mieszkanie w kamienicy K17"
      company="A+B ARCHITEKTURA"
      authors="Anna Wilk-Tokarczyk, Beata Kosok"
      location="Katowice"
      project="2016"
      realization="2016"
      size="95"

      arrayOfImages={[
        { imgSrc: img1, type: "horizontal" },
        { imgSrc: img2, type: "vertical" },
        { imgSrc: img3, type: "vertical" },
        { imgSrc: img4, type: "vertical" },
        { imgSrc: img5, type: "vertical" },
        { imgSrc: img6, type: "vertical" },
        { imgSrc: img7, type: "vertical" },
        { imgSrc: img8, type: "vertical" },
        { imgSrc: img9, type: "vertical" },
        { imgSrc: img10, type: "horizontal" },
        { imgSrc: img11, type: "horizontal" },


      ]}
    />
  );
};

export default MieszkanieKatowiceK17;
