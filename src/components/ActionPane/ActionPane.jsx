import React, { Component } from "react";
import PropTypes from "prop-types";
import "./_action-pane.less";

class ActionPane extends Component {
  getActionPaneBodyContent = () => {
    const { headerText } = this.props;
    return (
      <div className="action-pane-content-container">
        <h3> {headerText}</h3>
        {this.getSummonerNameInputBox()}
      </div>
    );
  };

  getSummonerNameInputBox = () => {
    return (
      <div className="summoner-name-container">
        <form action="">
          <div class="field">
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="xMidOrFeed420x"
            />
            <label for="fullname">enter summoner name</label>
          </div>
        </form>
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
