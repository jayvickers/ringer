import React, { useState } from "react";
import PropTypes from "prop-types";
import RoleWindow from "./RoleWindow";
import RoleOption from "./RoleOption";
import "./_role-selector.less";

const RoleSelector = props => {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleClick = () => {
    setPopupOpen(true);
  };

  const setRole = (e, inputRole) => {
    e.stopPropagation();
    setPopupOpen(false);
    props.passRoles(e, inputRole, props.isPrimary);
  };

  return (
    <div className="role-selector-container">
      <div onClick={() => handleClick()} id="baseDiv">
        <RoleOption
          option={props.role ? props.role : "Fill"}
          handleRoleChange={() => {}}
          placeHolder
        />
      </div>
      <RoleWindow
        disabledRole={props.disabledRole}
        isOpen={popupOpen}
        handleRoleChange={setRole}
      />
    </div>
  );
};

RoleSelector.propTypes = {
  disabledRole: PropTypes.string,
  isPrimary: PropTypes.bool,
  overRide: PropTypes.string,
  passRoles: PropTypes.func,
  role: PropTypes.string
};

export default RoleSelector;
