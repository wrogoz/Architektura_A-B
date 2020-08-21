import React from "react";
import { connect } from "react-redux";
import MobileArchitecture from "./architecture-elements//mobile-architecture";
const Architecture = (props) => {
  return (
    <>
      <MobileArchitecture />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    WindowWidth: state.WindowWidth,
  };
};

export default connect(mapStateToProps)(Architecture);
