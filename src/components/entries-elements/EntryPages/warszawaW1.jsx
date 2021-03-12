import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";

import img1 from "../../../images/entries/warszawa_W1/AB_W1_1.jpg";
import img2 from "../../../images/entries/warszawa_W1/AB_W1_2.jpg";
import img3 from "../../../images/entries/warszawa_W1/AB_W1_3.jpg";
import img4 from "../../../images/entries/warszawa_W1/AB_W1_4.jpg";





const WarszawaW1 = () => {
  return (
    <SingleProject
      projectName="Pokój dziecka W1"
      company="A+B ARCHITEKTURA"
      authors="Anna Wilk-Tokarczyk, Beata Kosok"
      location="Warszawa"
      project="2019"
      realization="2019"
      size="9"
      arrayOfImages={[
        { imgSrc: img1, type: "horizontal" },
        { imgSrc: img2, type: "horizontal" },
        { imgSrc: img3, type: "horizontal" },
        { imgSrc: img4, type: "horizontal" },

      ]}
    />
  );
};

export default WarszawaW1;
