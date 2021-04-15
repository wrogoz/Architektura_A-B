import desktopImg1 from "../../images/homePage/desktop/AB_S1.jpg"
import desktopImg2 from "../../images/homePage/desktop/AB_S2.JPG"
import desktopImg3 from "../../images/homePage/desktop/AB_S3.jpg"

import mobileImg1 from '../../images/homePage/mobile/AB_SK1.jpg'
import mobileImg2 from '../../images/homePage/mobile/AB_SK2.jpg'
import mobileImg3 from '../../images/homePage/mobile/AB_SK3.jpg'
import mobileImg4 from '../../images/homePage/mobile/AB_SK4.jpg'


class Img  {
    constructor(image,src){
        this.image=image;
        this.src=src;
    }
}

export const mobileImages = [new Img(mobileImg1,'/architecture/andrychow_A6'),new Img(mobileImg2,'/entries/apartament_katowice_k18'),new Img(mobileImg3,'/entries/apartament_katowice_k18'),new Img(mobileImg4,'/entries/mieszkanie_katowice_k17')];



export const desktopImages = [new Img(desktopImg1,'/architecture/andrychow_A6'),new Img(desktopImg2,'/entries/kuchnia_bytom_B2'),new Img(desktopImg3,'/entries/apartament_katowice_k18')]