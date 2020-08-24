import React from "react";
import { connect } from "react-redux";
import MobileArchitecture from "./architecture-elements/mobileArchitecture";
import DesktopArchitectur from "./architecture-elements/desktopArchitecture"
const Architecture = (props) => {
  return (
    <>
      {props.WindowWidth<800?<MobileArchitecture />:<DesktopArchitectur/>}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    WindowWidth: state.WindowWidth,
  };
};

export default connect(mapStateToProps)(Architecture);
