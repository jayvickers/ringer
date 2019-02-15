// This is a comment from Logan
import React, { Component } from "react";
import BottomPane from "../BottomPane/BottomPane";
import TopPane from "../TopPane/TopPane";
import "./_atf-layout.less";

class AtfLayout extends Component {
  render() {
    return (
      <div className="atf-layout">
        <TopPane />
        <BottomPane />
      </div>
    );
  }
}
export default AtfLayout;
