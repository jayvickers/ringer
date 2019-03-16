import React from "react";
import PropTypes from "prop-types";
import RoleOption from "./RoleOption";
import Roles from "../../Shared/Types/Roles.js";

const RoleWindow = props => {
  const handleClick = e => {
    props.handleRoleChange(e, props.currentlySelected);
  };
  return (
    <div
      onClick={e => handleClick(e)}
      className={props.isOpen ? "is-open" : ""}
      id="popUpDiv"
    >
      <div className="option-container">
        <h2>Click icon to select role</h2>
        <RoleOption
          hasHover
          isDisabled={props.disabledRole === Roles.top}
          option={Roles.top}
          handleRoleChange={props.handleRoleChange}
        />

        <RoleOption
          hasHover
          isDisabled={props.disabledRole === Roles.jungle}
          option={Roles.jungle}
          handleRoleChange={props.handleRoleChange}
        />
        <RoleOption
          hasHover
          isDisabled={props.disabledRole === Roles.mid}
          option={Roles.mid}
          handleRoleChange={props.handleRoleChange}
        />
        <RoleOption
          hasHover
          isDisabled={props.disabledRole === Roles.bot}
          option={Roles.bot}
          handleRoleChange={props.handleRoleChange}
        />
        <RoleOption
          hasHover
          isDisabled={props.disabledRole === Roles.support}
          option={Roles.support}
          handleRoleChange={props.handleRoleChange}
        />
        <RoleOption
          hasHover
          option={Roles.fill}
          handleRoleChange={props.handleRoleChange}
        />
        <RoleOption
          currentlySelected
          option={props.currentlySelected}
          handleRoleChange={props.handleRoleChange}
        />
      </div>
    </div>
  );
};

RoleWindow.propTypes = {
  currentlySelected: PropTypes.string,
  disabledRole: PropTypes.string,
  handleRoleChange: PropTypes.func,
  isOpen: PropTypes.bool
};

export default RoleWindow;
