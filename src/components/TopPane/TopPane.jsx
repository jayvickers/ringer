import React, { Component } from "react";
import "./_top-pane.less";

class TopPane extends Component {
  render() {
    return (
      <div className="top-pane">
        <div className="top-pane-text-container">
          <h1> Find a teammate in seconds...</h1>
          <h2> it's dangerous to go alone!</h2>
        </div>
      </div>
    );
  }
}
export default TopPane;
