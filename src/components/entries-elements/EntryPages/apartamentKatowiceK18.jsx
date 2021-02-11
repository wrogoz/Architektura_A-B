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
import img13 from "../../../images/entries/apartament_katowice_k18/AB_K18_13.jpg";



const ApartamentKatowiceK18 = () => {
  return (
    <SingleProject
      projectName="Apartament K18"
      company="A+B ARCHITEKTURA"
      authors="Anna Wilk-Tokarczyk, Beata Kosok"
      location="Katowice"
      project="2018"
      realization="2018"
      size="90"
      photograph="Ola Jankowska Olikj.com"


      arrayOfImages={[img1, img2, img3, img4, img5,img6,img7,img8,img9,img10,img11,img12,img13]}
    />
  );
};

export default ApartamentKatowiceK18;
