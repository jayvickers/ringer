import React, { useState } from "react";
import PropTypes from "prop-types";
import RoleSelector from "../RoleSelector/RoleSelector";
import "./_role-input-container.less";

const RoleInputContainer = props => {
  const [state, setState] = useState({
    popupOpen: false,
    primaryRole: null
  });

  // const handleClick = () => {
  //   setState({ popupOpen: true });
  // };

  // const setPrimaryRole = (e, inputRole) => {
  //   e.stopPropagation();
  //   setState({ primaryRole: inputRole });
  // };

  return (
    <div className="ringer-input-container">
      <h4>Select your roles</h4>
      <div className="role-input-container">
        <RoleSelector />
        <RoleSelector />
      </div>
    </div>
  );
};

RoleInputContainer.propTypes = {
  lfRoles: PropTypes.bool
};

export default RoleInputContainer;
