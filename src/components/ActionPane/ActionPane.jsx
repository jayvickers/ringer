import React, { Component } from "react";
import PropTypes from "prop-types";
import MultipleChoiceSelect from "../Shared/MultipleChoiceSelect/MultipleChoiceSelect";
import TextInput from "../Shared/TextInput/TextInput";
import "./_action-pane.less";

class ActionPane extends Component {
  getActionPaneBodyContent = () => {
    const { headerText } = this.props;
    return (
      <div className="action-pane-content-container">
        <h3> {headerText}</h3>
        {this.getSummonerNameInputBox()}
        {this.getRolesPlayed()}
        {this.getRolesSearching()}
      </div>
    );
  };

  getSummonerNameInputBox = () => {
    return (
      <TextInput
        id="summonerName"
        name="summonerName"
        placeholder="xMidOrFeed420x"
        label="Summoner Name"
      />
    );
  };

  getRolesPlayed = () => {
    return <MultipleChoiceSelect />;
  };

  getRolesSearching = () => {
    return <MultipleChoiceSelect lfRoles />;
  };

  render() {
    return <div className="action-pane">{this.getActionPaneBodyContent()}</div>;
  }
}

ActionPane.propTypes = {
  headerText: PropTypes.string
};

export default ActionPane;
