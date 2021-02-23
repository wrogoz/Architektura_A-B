import AB_K18_1 from '../../images/entries/apartament_katowice_k18/AB_K18_1.jpg'
import AB_K2_1 from '../../images/entries/katowice_K2/AB_K2_1.jpg'
import AB_K17_1 from '../../images/entries/katowice_K17/AB_K17_1.jpg'
import AB_PWZ7_1 from '../../images/entries/psary_P7/AB_PWZ7_1.jpg'

import AB_B6_1 from '../../images/entries/kuchnia_bytom_b6/AB_B6_1.jpg'
import AB_B2_1 from '../../images/entries/kuchnia_bytom_b2/AB_B2_1.jpg'
import AB_C7_1 from '../../images/entries/dom_jednorodzinny_cieszyn_c7/AB_C7_1.jpg';


import AB_N1_1 from '../../images/entries/nosy_N1/AB_N1_1.jpg'
    class ProjectBasicInfo {
      constructor (imgSrc,path,title,subtitle,projectDate){
        this.imgSrc=imgSrc
        this.path=path
        this.title=title
        this.subtitle=subtitle
        this.projectDate=projectDate
      }

    }
    const AB_N1= new ProjectBasicInfo(AB_N1_1,'/entries/dom_jednorodzinny_nosy_n1','Dom_jednorodzinny_Nosy_N1','Wnętrza','2019')
    const AB_K18= new ProjectBasicInfo(AB_K18_1,'/entries/apartament_katowice_k18','Apartament_Katowice_K18','Wnętrza','2018')
    const AB_K2= new ProjectBasicInfo(AB_K2_1,'/entries/mieszkanie_katowice_k2','Mieszkanie_Katowice_K2','Wnętrza','2020')
    const AB_K17= new ProjectBasicInfo(AB_K17_1,'/entries/mieszkanie_katowice_k17','Mieszkanie_w_kamienicy_katowice_K17','Wnętrza','2016')

    const AB_B2= new ProjectBasicInfo(AB_B2_1,'/entries/kuchnia_bytom_B2','Kuchnia_Bytom_B2','Wnętrza','2016')
   const AB_B6= new ProjectBasicInfo(AB_B6_1,'/entries/kuchnia_bytom_B6','Kuchnia_Bytom_B2','Wnętrza','2017')
   const AB_C7= new ProjectBasicInfo(AB_C7_1,'/entries/domCieszynC7','Dom_jednorodzinny_C7','Wnętrza','2017')

   const AB_P7= new ProjectBasicInfo(AB_PWZ7_1,'/entries/dom_jednorodzinny_psary_p7','Dom_jednorodzinny_Psary_P7','Wnętrza','2018')

   export const entriesListData =[
    AB_K18,
    AB_N1,
    AB_K2,
    AB_K17,
    AB_P7,
     AB_B2,
     AB_B6,
     AB_C7,

    ]
