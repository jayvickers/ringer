import React from "react";
import PropTypes from "prop-types";
import RoleOption from "./RoleOption";
import "./_role-window.less";

const RoleWindow = props => {
  const handleClick = e => {
    props.handleRoleChange(e, "Fill");
  };
  return (
    <div
      onClick={e => handleClick(e)}
      className={props.isOpen ? "is-open" : ""}
      id="popUpDiv"
    >
      <div className="option-container">
        <RoleOption
          isDisabled={props.disabledRole === "Top"}
          option="Top"
          handleRoleChange={props.handleRoleChange}
        />
        <RoleOption
          isDisabled={props.disabledRole === "Jungle"}
          option="Jungle"
          handleRoleChange={props.handleRoleChange}
        />
        <RoleOption
          isDisabled={props.disabledRole === "Mid"}
          option="Mid"
          handleRoleChange={props.handleRoleChange}
        />
        <RoleOption
          isDisabled={props.disabledRole === "Bot"}
          option="Bot"
          handleRoleChange={props.handleRoleChange}
        />
        <RoleOption
          isDisabled={props.disabledRole === "Support"}
          option="Support"
          handleRoleChange={props.handleRoleChange}
        />
        <RoleOption option="Fill" handleRoleChange={props.handleRoleChange} />
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
