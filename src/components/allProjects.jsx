import React from "react";
import { connect } from "react-redux";
import MobileAllProjects from "./projects-elements/mobileProjects";
import DesktopAllProjects from "./projects-elements/desktopProjects";
const Architecture = (props) => {
  return (
    <>
      {props.WindowWidth < 800 ? <MobileAllProjects /> : <DesktopAllProjects />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    WindowWidth: state.WindowWidth,
  };
};

export default connect(mapStateToProps)(Architecture);
