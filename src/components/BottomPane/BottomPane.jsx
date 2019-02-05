import React, { Component } from "react";
import ActionPane from "../ActionPane/ActionPane";
import "./_bottom-pane.less";

class BottomPane extends Component {
  render() {
    return (
      <div className="bottom-pane">
        <ActionPane headerText="Duo Finder" />
      </div>
    );
  }
}
export default BottomPane;
