import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/entries/lazienka_rogoznik_R4/AB_RL4_1.jpg";
import img2 from "../../../images/entries/lazienka_rogoznik_R4/AB_RL4_2.jpg";
import img3 from "../../../images/entries/lazienka_rogoznik_R4/AB_RL4_3.jpg";



const LazienkaRogoznikR4 = () => {
    return (
        <SingleProject
          projectName="Łazienka R4"
          company="A+B ARCHITEKTURA"
          authors="Anna Wilk-Tokarczyk, Beata Kosok"
          location="Rogoźnik"
          project="2017"
          realization="2017"
          size="15"
          arrayOfImages={[
            { imgSrc: img1, type: "horizontal" },
            { imgSrc: img2, type: "horizontal" },
            { imgSrc: img3, type: "horizontal" },


          ]}
        />
      );
};

export default LazienkaRogoznikR4;