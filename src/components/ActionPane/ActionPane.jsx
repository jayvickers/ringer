import React from "react";
import PropTypes from "prop-types";
import MultipleChoiceSelect from "../Shared/MultipleChoiceSelect/MultipleChoiceSelect";
import TextInput from "../Shared/TextInput/TextInput";
import SubmitButton from "../Shared/SubmitButton/SubmitButton";
import RoleSelector from "../Shared/RoleSelector/RoleSelector";
import "./_action-pane.less";

const ActionPane = props => {
  const getActionPaneBodyContent = () => {
    const { headerText } = props;
    return (
      <div className="action-pane-content-container">
        <h3> {headerText}</h3>
        <form action="#">
          {getSummonerNameInputBox()}
          {getRolesPlayed()}
          {getRolesSearching()}
          {getSubmitButton()}
        </form>
      </div>
    );
  };

  const getSummonerNameInputBox = () => {
    return (
      <TextInput
        id="summonerName"
        name="summonerName"
        placeholder="xMidOrFeed420x"
        label="Summoner Name"
      />
    );
  };

  const getRolesPlayed = () => {
    //return <MultipleChoiceSelect />;
    return <RoleSelector />;
  };

  const getRolesSearching = () => {
    return <MultipleChoiceSelect lfRoles />;
  };

  const getSubmitButton = () => {
    return <SubmitButton buttonText="Find a Duo" />;
  };

  return <div className="action-pane">{getActionPaneBodyContent()}</div>;
};

ActionPane.propTypes = {
  headerText: PropTypes.string
};

export default ActionPane;
