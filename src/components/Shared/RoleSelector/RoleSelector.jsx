import React, { useState } from "react";
import PropTypes from "prop-types";
import RoleWindow from "./RoleWindow";
import RoleOption from "./RoleOption";
import "./_role-selector.less";

const RoleSelector = props => {
  const [state, setState] = useState({
    popupOpen: false,
    role: null
  });

  const handleClick = () => {
    setState({ popupOpen: true });
  };

  const setRole = (e, inputRole) => {
    e.stopPropagation();
    setState({ role: inputRole });
    props.passRoles(e, inputRole, props.isPrimary);
  };

  return (
    <div className="role-selector-container">
      <div onClick={() => handleClick()} id="baseDiv">
        <RoleOption
          option={
            props.overRide ? props.overRide : state.role ? state.role : "Fill"
          }
          handleRoleChange={() => {}}
          placeHolder
        />
      </div>
      <RoleWindow
        disabledRole={props.disabledRole}
        isOpen={state.popupOpen}
        handleRoleChange={setRole}
      />
    </div>
  );
};

RoleSelector.propTypes = {
  disabledRole: PropTypes.string,
  isPrimary: PropTypes.bool,
  overRide: PropTypes.string,
  passRoles: PropTypes.func
};

export default RoleSelector;
