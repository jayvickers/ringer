// This is a comment from Logan
import React, { Component } from "react";
import BottomPane from "../BottomPane/BottomPane";
import ActionPane from "../ActionPane/ActionPane";
import RightArrow from "../Shared/RightArrow/RightArrow";
import "./_atf-layout.less";

class AtfLayout extends Component {
  render() {
    return (
      <div className="atf-layout">
        {/* <div className="test-button">
          <div className="button-text"> Button Text</div>
        </div> */}
        {/* call top pane here, replace hard code with real component */}
        <div className="top-pane">
          <div className="top-pane-text-container">
            <h1> Find a teammate in seconds...</h1>
            <h2> it's dangerous to go alone!</h2>
          </div>
          <RightArrow />
          <div className="top-pane-action-container">
            <ActionPane headerText="Duo Finder" />
          </div>
        </div>
        <BottomPane />
      </div>
    );
  }
}
export default AtfLayout;
