import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/entries/salon_rogoznik_R4/AB_R4_1.jpg";
import img2 from "../../../images/entries/salon_rogoznik_R4/AB_R4_2.jpg";
import img3 from "../../../images/entries/salon_rogoznik_R4/AB_R4_3.jpg";
import img4 from "../../../images/entries/salon_rogoznik_R4/AB_R4_4.jpg";


const SalonRogoznikR4 = () => {
    return (
        <SingleProject
          projectName="Salon R4"
          company="A+B ARCHITEKTURA"
          authors="Anna Wilk-Tokarczyk, Beata Kosok"
          location="Rogoźnik"
          project="2017"
          realization="2017"
          size="40"
          arrayOfImages={[
            { imgSrc: img1, type: "horizontal" },
            { imgSrc: img2, type: "horizontal" },
            { imgSrc: img3, type: "horizontal" },
            { imgSrc: img4, type: "horizontal" },

          ]}
        />
      );
};

export default SalonRogoznikR4;