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
        <RoleOption option="Top" handleRoleChange={props.handleRoleChange} />
        <RoleOption option="Jng" handleRoleChange={props.handleRoleChange} />
        <RoleOption option="Mid" handleRoleChange={props.handleRoleChange} />
        <RoleOption option="Bot" handleRoleChange={props.handleRoleChange} />
        <RoleOption option="Sup" handleRoleChange={props.handleRoleChange} />
        <RoleOption option="Fill" handleRoleChange={props.handleRoleChange} />
      </div>
    </div>
  );
};

RoleWindow.propTypes = {
  handleRoleChange: PropTypes.func,
  isOpen: PropTypes.bool
};

export default RoleWindow;
