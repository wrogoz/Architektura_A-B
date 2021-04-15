import AB_A6_Z2 from "../../images/architecture/andrychow_A6/AB_A6_Z2.jpg";
import AB_P7_1 from "../../images/architecture/psary_P7/AB_P7_1.jpg";
import AB_Z10_1 from "../../images/architecture/zabrze_Z10/AB_Z10_1.jpg";

class ProjectBasicInfo {
  constructor(imgSrc, path, title, subtitle, projectDate) {
    this.imgSrc = imgSrc;
    this.path = path;
    this.title = title;
    this.subtitle = subtitle;
    this.projectDate = projectDate;
  }
}

const AB_A6 = new ProjectBasicInfo(
  AB_A6_Z2,
  "/architecture/andrychow_A6",
  "Osiedle domów jednorodzinnych_Andrychów_A6",
  "Architektura",
  "2018"
);
const AB_P7 = new ProjectBasicInfo(
  AB_P7_1,
  "/architecture/psary_P7",
  "Dom jednorodzinny_Psary_P7",
  "Architektura",
  "2014"
);
const AB_Z10 = new ProjectBasicInfo(
  AB_Z10_1,
  "/architecture/zabrze_Z10",
  "Dom jednorodzinny_Zabrze_Z10",
  "Architektura",
  "2017"
);

export const architectureListData = [AB_A6, AB_P7, AB_Z10];
