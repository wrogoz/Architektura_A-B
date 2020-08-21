import React from "react";
import SingleProject from "../../singleProjectComponent/singleProjectDetails";
import img1 from "../../../images/entries/bathroom/01_1.jpg";
import img2 from "../../../images/entries/bathroom/02_1.jpg";
import img3 from "../../../images/entries/bathroom/03_1.jpg";
import img4 from "../../../images/entries/bathroom/04_1.jpg";
import img5 from "../../../images/entries/bathroom/05_1.jpg";

const SwimmingPool = () => {
  return (
    <SingleProject
      projectName="(a)Nazwa projektu"
      location="Katowice"
      client="prywatny"
      size="1212"
      status="ukończony"
      authors="Ania & Beata"
      arrayOfImages={[img1, img2, img3, img4, img5]}
    />
  );
};

export default SwimmingPool;
