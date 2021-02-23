import React from "react";

import {entriesListData} from './entriesListData'

import ListCreatorDesktop from "../projectsListComponent/listCreatorDesktop";

const DesktopEntries = (props) => {

  return (
    <ListCreatorDesktop
      ListData={entriesListData} />
  );
};



export default DesktopEntries