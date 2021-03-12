import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/entries/katowice_K11/AB_K11_1.jpg";
import img2 from "../../../images/entries/katowice_K11/AB_K11_2.jpg";
import img3 from "../../../images/entries/katowice_K11/AB_K11_3.jpg";
import img4 from "../../../images/entries/katowice_K11/AB_K11_4.jpg";
import img5 from "../../../images/entries/katowice_K11/AB_K11_5.jpg";
import img6 from "../../../images/entries/katowice_K11/AB_K11_6.jpg";






const KatowiceK11 = () => {
  return (
    <SingleProject
      projectName="Łazienka K11"
      company="A+B ARCHITEKTURA"
      authors="Anna Wilk-Tokarczyk, Beata Kosok"
      location="Katowice"
      project="2014"
      realization="2014"
      size="5"

      arrayOfImages={[
        { imgSrc: img1, type: "horizontal" },
        { imgSrc: img2, type: "vertical" },
        { imgSrc: img3, type: "vertical" },
        { imgSrc: img4, type: "vertical" },
        { imgSrc: img5, type: "vertical" },
        { imgSrc: img6, type: "horizontal" },



      ]}
    />
  );
};

export default KatowiceK11;
