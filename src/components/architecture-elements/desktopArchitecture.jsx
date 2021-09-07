import React from "react";
import {architectureListData} from '../projects-elements/projectsListData'
import ListCreatorDesktop from '../projectsListComponent/listCreatorDesktop'
const DesktopArchitecture = (props) => {
    return (
      <ListCreatorDesktop
        ListData={architectureListData} />
    );
  };



export default DesktopArchitecture;
