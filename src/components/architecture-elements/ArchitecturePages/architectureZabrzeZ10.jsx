import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/architecture/zabrze_Z10/AB_Z10_1.jpg";
import img2 from "../../../images/architecture/zabrze_Z10/AB_Z10_2.jpg";
import img3 from "../../../images/architecture/zabrze_Z10/AB_Z10_3.jpg";
import img4 from "../../../images/architecture/zabrze_Z10/AB_Z10_4.jpg";
import img5 from "../../../images/architecture/zabrze_Z10/AB_Z10_5.jpg";




const ArchitectureZabrzeZ10 = () => {
    return (
        <SingleProject
          projectName="Dom jednorodzinny Z10"
          company="A+B ARCHITEKTURA"
          authors="Anna Wilk-Tokarczyk, Beata Kosok"
          location="Zabrze"
          project="2017"
          realization="2018/19"
          size="240"
          arrayOfImages={[
            { imgSrc: img1, type: "horizontal" },
            { imgSrc: img2, type: "horizontal" },
            { imgSrc: img3, type: "horizontal" },
            { imgSrc: img4, type: "horizontal" },
            { imgSrc: img5, type: "horizontal" },


          ]}
        />
      );
};

export default ArchitectureZabrzeZ10 ;