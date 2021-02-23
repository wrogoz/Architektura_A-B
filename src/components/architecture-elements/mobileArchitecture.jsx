import React from 'react'
import {architectureListData} from './architectureListData'
import ListCreatorMobile from '../projectsListComponent/listCreatorMobile'
const MobileArchitecture = () => {
 return (
   <ListCreatorMobile
   ListData={architectureListData} />
 )
}

export default MobileArchitecture
