// This is a comment from Logan
import React, { Component } from "react";
import BottomPane from "../BottomPane/BottomPane";
import "./_atf-layout.less";

class AtfLayout extends Component {
  render() {
    return (
      <div className="atf-layout">
        {/* call top pane here, replace hard code with real component */}
        <div className="top-pane" />
        <BottomPane />
      </div>
    );
  }
}
export default AtfLayout;
