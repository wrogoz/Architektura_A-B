import desktopImg1 from "../../images/homePage/desktop/img1.jpg"
import desktopImg2 from "../../images/homePage/desktop/img2.jpg"

import mobileImg1 from '../../images/homePage/mobile/mobileImg1.jpg'
import mobileImg2 from '../../images/homePage/mobile/mobileImg2.jpg'
import mobileImg3 from '../../images/homePage/mobile/mobileImg3.jpg'


class Img  {
    constructor(image,src){
        this.image=image;
        this.src=src;
    }
}

export const mobileImages = [new Img(mobileImg1,'/entries'),new Img(mobileImg2,'/entries'),new Img(mobileImg3,'/entries')];



export const desktopImages = [new Img(desktopImg1,'/entries'),new Img(desktopImg2,'/entries')]