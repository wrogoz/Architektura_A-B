import React from "react";

import {projectsListData} from "./projectsListData"

import ListCreatorMobile from '../projectsListComponent/listCreatorMobile'


const MobileAllProjects = (props) => {



  return (
    <ListCreatorMobile
      ListData={projectsListData} />
  );
};



export default MobileAllProjects