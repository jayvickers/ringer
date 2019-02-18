import React, { Component } from "react";
import InfoPanel from "../InfoPanel/InfoPanel";
import "./_bottom-pane.less";

class BottomPane extends Component {
  render() {
    const bodyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non elementum turpis. Nam ac porta erat, et fermentum lectus.';

    return (
      <div className="bottom-pane">
        <InfoPanel
          icon='gamepad'
          headerText='JT'
          bodyText={bodyText} />
        <InfoPanel
          icon='headset'
          headerText='Jay'
          bodyText={bodyText} />
        <InfoPanel
          icon='trophy'
          headerText='Logan'
          bodyText={bodyText} />
      </div>
    );
  }
}
export default BottomPane;
