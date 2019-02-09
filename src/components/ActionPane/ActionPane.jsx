import React, { Component } from "react";
import PropTypes from "prop-types";
import MultipleChoiceSelect from "../Shared/MultipleChoiceSelect/MultipleChoiceSelect";
import "./_action-pane.less";

class ActionPane extends Component {
  getActionPaneBodyContent = () => {
    const { headerText } = this.props;
    return (
      <div className="action-pane-content-container">
        <h3> {headerText}</h3>
        {this.getSummonerNameInputBox()}
        {this.getRolesPlayed()}
      </div>
    );
  };

  getSummonerNameInputBox = () => {
    return (
      <div className="summoner-name-container">
        <form action="">
          <div className="field">
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="xMidOrFeed420x"
            />
            <label htmlFor="fullname">enter summoner name</label>
          </div>
        </form>
      </div>
    );
  };

  getRolesPlayed = () => {
    return <MultipleChoiceSelect />;
  };

  render() {
    return <div className="action-pane">{this.getActionPaneBodyContent()}</div>;
  }
}

ActionPane.propTypes = {
  headerText: PropTypes.string
};

export default ActionPane;
