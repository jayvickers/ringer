import React from "react";
import PropTypes from "prop-types";
import TextInput from "../Shared/TextInput/TextInput";
import SubmitButton from "../Shared/SubmitButton/SubmitButton";
import RoleInputContainer from "../Shared/RoleInputContainer/RoleInputContainer";
import "./_action-pane.less";
import posed, { PoseGroup } from "react-pose";

const ActionPane = props => {
  const Box = posed.div({
    closed: { opacity: 0, y: "100%" },
    open: {
      y: "0",
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 200, damping: 20 },
        default: { duration: 850 }
      }
    }
  });

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
        maxlength="20"
        name="summonerName"
        placeholder="xMidOrFeed420x"
        label="Summoner Name"
      />
    );
  };

  const getRolesPlayed = () => {
    return <RoleInputContainer />;
  };

  const getRolesSearching = () => {
    return <RoleInputContainer lfRoles />;
  };

  const getSubmitButton = () => {
    return <SubmitButton buttonText="Find a Duo" />;
  };

  return (
    <Box initialPose="closed" pose="open" className="action-pane">
      {getActionPaneBodyContent()}
    </Box>
  );
};

ActionPane.propTypes = {
  headerText: PropTypes.string
};

export default ActionPane;
