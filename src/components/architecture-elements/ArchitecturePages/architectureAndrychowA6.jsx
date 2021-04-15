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
import img11 from "../../../images/architecture/andrychow_A6/AB_A6_11.jpg";
import img12 from "../../../images/architecture/andrychow_A6/AB_A6_12.jpg";
import img13 from "../../../images/architecture/andrychow_A6/AB_A6_13.jpg";
import img14 from "../../../images/architecture/andrychow_A6/AB_A6_14.jpg";
import img15 from "../../../images/architecture/andrychow_A6/AB_A6_15.jpg";
import img16 from "../../../images/architecture/andrychow_A6/AB_A6_16.jpg";
import img17 from "../../../images/architecture/andrychow_A6/AB_A6_17.jpg";




const ArchitectureAndrychowA6 = () => {
    return (
        <SingleProject
          projectName="Osiedle domów jednorodzinnych A6"
          company="A+B ARCHITEKTURA"
          authors="Anna Wilk-Tokarczyk, Beata Kosok oraz Anna Siwińska"
          location="Andrychów"
          project="8 budynków 2018 / 2 budynki 2020"
          realization="2019-20/w trakcie"
          size="164 m²/ 120"
          photograph="Maria Halotta"
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
            { imgSrc: img12, type: "horizontal" },
            { imgSrc: img13, type: "horizontal" },
            { imgSrc: img14, type: "horizontal" },
            { imgSrc: img15, type: "horizontal" },
            { imgSrc: img16, type: "horizontal" },
            { imgSrc: img17, type: "horizontal" },


          ]}
        />
      );
};

export default ArchitectureAndrychowA6 ;