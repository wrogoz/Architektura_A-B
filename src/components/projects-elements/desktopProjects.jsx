import React from "react";

import {projectsListData} from "./projectsListData"

import ListCreatorDesktop from "../projectsListComponent/listCreatorDesktop";

const DesktopAllProjects = (props) => {

  return (
    <ListCreatorDesktop
      ListData={projectsListData} />
  );
};



export default DesktopAllProjects