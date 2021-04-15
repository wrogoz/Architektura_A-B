import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/entries/apartament_katowice_k18/AB_K18_1.jpg";
import img2 from "../../../images/entries/apartament_katowice_k18/AB_K18_2.jpg";
import img3 from "../../../images/entries/apartament_katowice_k18/AB_K18_3.jpg";
import img4 from "../../../images/entries/apartament_katowice_k18/AB_K18_4.jpg";
import img5 from "../../../images/entries/apartament_katowice_k18/AB_K18_5.jpg";
import img6 from "../../../images/entries/apartament_katowice_k18/AB_K18_6.jpg";
import img7 from "../../../images/entries/apartament_katowice_k18/AB_K18_7.jpg";
import img8 from "../../../images/entries/apartament_katowice_k18/AB_K18_8.jpg";
import img9 from "../../../images/entries/apartament_katowice_k18/AB_K18_9.jpg";
import img10 from "../../../images/entries/apartament_katowice_k18/AB_K18_10.jpg";
import img11 from "../../../images/entries/apartament_katowice_k18/AB_K18_11.jpg";
import img12 from "../../../images/entries/apartament_katowice_k18/AB_K18_12.jpg";




const ApartamentKatowiceK18 = () => {
  return (
    <SingleProject
      projectName="Apartament K18"
      company="A+B ARCHITEKTURA"
      authors="Anna Wilk-Tokarczyk, Beata Kosok"
      location="Katowice"
      project="2018"
      realization="2018"
      size="93"
      photograph="Ola Jankowska Olikj.com"
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
        { imgSrc: img10, type: "vertical" },
        { imgSrc: img11, type: "vertical" },
        { imgSrc: img12, type: "horizontal" },

      ]}
    />
  );
};

export default ApartamentKatowiceK18;
