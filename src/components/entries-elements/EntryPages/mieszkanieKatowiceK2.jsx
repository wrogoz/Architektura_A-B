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
import img10 from "../../../images/entries/katowice_K2/AB_K2_10.jpg"
import img11 from "../../../images/entries/katowice_K2/AB_K2_11.jpg"
import img12 from "../../../images/entries/katowice_K2/AB_K2_12.jpg"
import img13 from "../../../images/entries/katowice_K2/AB_K2_13.jpg"
import img14 from "../../../images/entries/katowice_K2/AB_K2_14.jpg"
import img15 from "../../../images/entries/katowice_K2/AB_K2_15.jpg"
import img16 from "../../../images/entries/katowice_K2/AB_K2_16.jpg"
import img17 from "../../../images/entries/katowice_K2/AB_K2_17.jpg"
import img18 from "../../../images/entries/katowice_K2/AB_K2_18.jpg"
import img19 from "../../../images/entries/katowice_K2/AB_K2_19.jpg"






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
      photograph='Katarzyna Leśniok'

      arrayOfImages={[
        { imgSrc: img1, type: "vertical" },
        { imgSrc: img2, type: "vertical" },
        { imgSrc: img3, type: "horizontal" },
        { imgSrc: img4, type: "vertical" },
        { imgSrc: img5, type: "vertical" },
        { imgSrc: img6, type: "vertical" },
        { imgSrc: img7, type: "vertical" },
        { imgSrc: img8, type: "vertical" },
        { imgSrc: img9, type: "vertical" },
        { imgSrc: img10, type: "vertical" },
        { imgSrc: img11, type: "vertical" },
        { imgSrc: img12, type: "horizontal" },
        { imgSrc: img13, type: "horizontal" },
        { imgSrc: img14, type: "horizontal" },
        { imgSrc: img15, type: "horizontal" },
        { imgSrc: img16, type: "horizontal" },
        { imgSrc: img17, type: "horizontal" },
        { imgSrc: img18, type: "horizontal" },
        { imgSrc: img19, type: "horizontal" },
      


      ]}
    />
  );
};

export default MieszkanieKatowiceK2;
