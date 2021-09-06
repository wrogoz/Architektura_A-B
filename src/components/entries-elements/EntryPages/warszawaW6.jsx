import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";

import img1 from "../../../images/entries/warszawa_W6/AB_W6_1.jpg";
import img2 from "../../../images/entries/warszawa_W6/AB_W6_2.jpg";
import img3 from "../../../images/entries/warszawa_W6/AB_W6_3.jpg";
import img4 from "../../../images/entries/warszawa_W6/AB_W6_4.jpg";





const LazienkaWarszawaW6 = () => {
  return (
    <SingleProject
      projectName="Łazienka W6"
      company="A+B ARCHITEKTURA"
      authors="Anna Wilk-Tokarczyk, Beata Kosok"
      location="Warszawa"
      project="2018"
      realization="2018"
      size="5"
      arrayOfImages={[
        { imgSrc: img1, type: "horizontal" },
        { imgSrc: img2, type: "vertical" },
        { imgSrc: img3, type: "vertical" },
        { imgSrc: img4, type: "horizontal" },

      ]}
    />
  );
};

export default LazienkaWarszawaW6;
