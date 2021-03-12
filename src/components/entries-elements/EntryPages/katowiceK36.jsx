import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/entries/katowice_K36/AB_K36_1.jpg";
import img2 from "../../../images/entries/katowice_K36/AB_K36_2.jpg";
import img3 from "../../../images/entries/katowice_K36/AB_K36_3.jpg";
import img4 from "../../../images/entries/katowice_K36/AB_K36_4.jpg";
import img5 from "../../../images/entries/katowice_K36/AB_K36_5.jpg";






const KatowiceK36 = () => {
  return (
    <SingleProject
      projectName="Łazienka K16"
      company="A+B ARCHITEKTURA"
      authors="Anna Wilk-Tokarczyk, Beata Kosok"
      location="Katowice"
      project="2014"
      realization="2014"
      size="8"

      arrayOfImages={[
        { imgSrc: img1, type: "vertical" },
        { imgSrc: img2, type: "vertical" },
        { imgSrc: img3, type: "vertical" },
        { imgSrc: img4, type: "vertical" },
        { imgSrc: img5, type: "horizontal" },



      ]}
    />
  );
};

export default KatowiceK36;
