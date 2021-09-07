import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/architecture/baseny_zewn_K8/AB_K8_1.jpg";
import img2 from "../../../images/architecture/baseny_zewn_K8/AB_K8_2.jpg";
import img3 from "../../../images/architecture/baseny_zewn_K8/AB_K8_3.jpg";


const BasenyK8 = () => {
  return (
    <SingleProject
      projectName="Przebudowa basenów zewnętrznych_K8"
      location="Katowice"
      client="prywatny"
      project="2014"
      visualization="Dagmara Koszny"
      company="A+B ARCHITEKTURA"
        arrayOfImages={[
            { imgSrc: img1, type: "horizontal" },
            { imgSrc: img2, type: "horizontal" },
            { imgSrc: img3, type: "horizontal" },
         

          ]}
    />
  );
};

export default BasenyK8;
