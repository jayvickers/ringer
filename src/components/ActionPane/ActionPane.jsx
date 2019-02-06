import React, { Component } from "react";
import PropTypes from "prop-types";
import "./_action-pane.less";

class ActionPane extends Component {
  getActionPaneBodyContent = () => {
    const { headerText } = this.props;
    return (
      <div className="action-pane-content-container">
        <h3 className="action-pane-header">{headerText}</h3>
        <p>here is some text</p>
        <p>here is some text</p>
        <p>here is some text</p>
      </div>
    );
  };

  render() {
    return <div className="action-pane">{this.getActionPaneBodyContent()}</div>;
  }
}

ActionPane.propTypes = {
  headerText: PropTypes.string
};

export default ActionPane;
