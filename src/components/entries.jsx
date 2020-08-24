import React from "react";
import { connect } from "react-redux";
import MobileEntries from "./entries-elements/mobileEntries";
import DesktopEntries from './entries-elements/desktopEntries'
const Entries = (props) => {
  return (
    <>
      {props.WindowWidth<800?<MobileEntries />:<DesktopEntries/>}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    WindowWidth: state.WindowWidth,
  };
};

export default connect(mapStateToProps)(Entries);
