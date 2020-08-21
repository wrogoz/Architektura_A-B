import React from "react";
import { connect } from "react-redux";
import MobileEntries from "./entries-elements/mobileEntries";
const Entries = (props) => {
  return (
    <>
      <MobileEntries />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    WindowWidth: state.WindowWidth,
  };
};

export default connect(mapStateToProps)(Entries);
