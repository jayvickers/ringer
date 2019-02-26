import React from "react";
import PropTypes from "prop-types";
import RoleOption from "./RoleOption";
import Roles from "../../Shared/Types/Roles.js";

const RoleWindow = props => {
  const handleClick = e => {
    props.handleRoleChange(e, Roles.fill);
  };
  return (
    <div
      onClick={e => handleClick(e)}
      className={props.isOpen ? "is-open" : ""}
      id="popUpDiv"
    >
      <div className="option-container">
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
      </div>
    </div>
  );
};

RoleWindow.propTypes = {
  disabledRole: PropTypes.string,
  handleRoleChange: PropTypes.func,
  isOpen: PropTypes.bool
};

export default RoleWindow;
