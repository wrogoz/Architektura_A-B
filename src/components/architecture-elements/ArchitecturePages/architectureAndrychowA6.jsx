import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/architecture/andrychow_A6/AB_A6_1.jpg";
import img2 from "../../../images/architecture/andrychow_A6/AB_A6_2.jpg";
import img3 from "../../../images/architecture/andrychow_A6/AB_A6_3.jpg";
import img4 from "../../../images/architecture/andrychow_A6/AB_A6_4.jpg";
import img5 from "../../../images/architecture/andrychow_A6/AB_A6_5.jpg";
import img6 from "../../../images/architecture/andrychow_A6/AB_A6_6.jpg";
import img7 from "../../../images/architecture/andrychow_A6/AB_A6_7.jpg";
import img8 from "../../../images/architecture/andrychow_A6/AB_A6_8.jpg";
import img9 from "../../../images/architecture/andrychow_A6/AB_A6_9.jpg";
import img10 from "../../../images/architecture/andrychow_A6/AB_A6_10.jpg";




const ArchitectureAndrychowA6 = () => {
    return (
        <SingleProject
          projectName="Osiedle domów jednorodzinnych A6"
          company="A+B ARCHITEKTURA"
          authors="Anna Wilk-Tokarczyk, Beata Kosok"
          location="Andrychów"
          project="8 budynków 2018 / 2 budynki 2020"
          realization="2019-20/w trakcie"
          size="164 m²/ 120"
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


          ]}
        />
      );
};

export default ArchitectureAndrychowA6 ;