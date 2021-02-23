import React from "react";

import {entriesListData} from "./entriesListData"

import ListCreatorMobile from '../projectsListComponent/listCreatorMobile'


const MobileEntries = (props) => {



  return (
    <ListCreatorMobile
      ListData={entriesListData} />
  );
};



export default MobileEntries