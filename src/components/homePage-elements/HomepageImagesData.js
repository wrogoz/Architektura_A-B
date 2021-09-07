import desktopImg1 from "../../images/homePage/desktop/AB_S1.jpg";
import desktopImg2 from "../../images/homePage/desktop/AB_S2.jpg";
import desktopImg3 from "../../images/homePage/desktop/AB_S3.JPG";
import desktopImg4 from "../../images/homePage/desktop/AB_S4.jpg";
import desktopImg5 from "../../images/homePage/desktop/AB_S5.jpg";

import mobileImg1 from "../../images/homePage/mobile/AB_SK1.jpg";
import mobileImg2 from "../../images/homePage/mobile/AB_SK2.jpg";
import mobileImg3 from "../../images/homePage/mobile/AB_SK3.jpg";
import mobileImg4 from "../../images/homePage/mobile/AB_SK4.jpg";
import mobileImg5 from "../../images/homePage/mobile/AB_SK5.jpg";

class Img {
  constructor(image, src) {
    this.image = image;
    this.src = src;
  }
}

export const mobileImages = [
  new Img(mobileImg1, "/architecture/andrychow_A6"),
  new Img(mobileImg2, "/entries/apartament_katowice_k18"),
  new Img(mobileImg3, "/entries/mieszkanie_katowice_k2"),
  new Img(mobileImg4, "/entries/dom_jednorodzinny_nosy_n1"),
  new Img(mobileImg5, "/entries/mieszkanie_katowice_k17"),
];

export const desktopImages = [
  new Img(desktopImg1, "/architecture/andrychow_A6"),
  new Img(desktopImg2, "/entries/dom_jednorodzinny_nosy_n1"),
  new Img(desktopImg3, "/entries/kuchnia_bytom_B2"),
  new Img(desktopImg4, "/entries/mieszkanie_katowice_k2"),
  new Img(desktopImg5, "/entries/apartament_katowice_k18"),
];
