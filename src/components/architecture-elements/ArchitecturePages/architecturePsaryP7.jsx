import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/architecture/psary_P7/AB_P7_1.jpg";
import img2 from "../../../images/architecture/psary_P7/AB_P7_2.jpg";
import img3 from "../../../images/architecture/psary_P7/AB_P7_3.jpg";
import img4 from "../../../images/architecture/psary_P7/AB_P7_4.jpg";
import img5 from "../../../images/architecture/psary_P7/AB_P7_5.jpg";
import img6 from "../../../images/architecture/psary_P7/AB_P7_6.jpg";
import img7 from "../../../images/architecture/psary_P7/AB_P7_7.jpg";
import img8 from "../../../images/architecture/psary_P7/AB_P7_8.jpg";
import img9 from "../../../images/architecture/psary_P7/AB_P7_9.jpg";
import img10 from "../../../images/architecture/psary_P7/AB_P7_10.jpg";
import img11 from "../../../images/architecture/psary_P7/AB_P7_11.jpg";



const ArchitecturePsaryP7 = () => {
    return (
        <SingleProject
          projectName="Salon R4"
          company="A+B ARCHITEKTURA"
          authors="Anna Wilk-Tokarczyk, Beata Kosok"
          location="Psary"
          project="2014"
          realization="2014/15"
          size="183"
          arrayOfImages={[
            { imgSrc: img1, type: "horizontal" },
            { imgSrc: img2, type: "horizontal" },
            { imgSrc: img3, type: "horizontal" },
            { imgSrc: img4, type: "horizontal" },
            { imgSrc: img5, type: "horizontal" },
            { imgSrc: img6, type: "horizontal" },
            { imgSrc: img7, type: "horizontal" },
            { imgSrc: img8, type: "horizontal" },
            { imgSrc: img9, type: "horizontal" },
            { imgSrc: img10, type: "horizontal" },
            { imgSrc: img11, type: "horizontal" },

          ]}
        />
      );
};

export default ArchitecturePsaryP7 ;