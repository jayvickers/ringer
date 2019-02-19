import React, { useState } from "react";
import PropTypes from "prop-types";
import RoleWindow from "./RoleWindow";
import "./_role-selector.less";

const RoleSelector = props => {
  const [state, setState] = useState({
    popupOpen: false,
    primaryRole: null
  });

  const handleClick = () => {
    setState({ popupOpen: true });
  };

  const setPrimaryRole = (e, inputRole) => {
    e.stopPropagation();
    setState({ primaryRole: inputRole });
  };

  return (
    <div className="role-selector-container">
      <div onClick={() => handleClick()} id="baseDiv">
        {state.primaryRole || "Click Me"}
      </div>
      <RoleWindow isOpen={state.popupOpen} handleRoleChange={setPrimaryRole} />
    </div>
  );
};

RoleSelector.propTypes = {
  buttonText: PropTypes.string
};

export default RoleSelector;
