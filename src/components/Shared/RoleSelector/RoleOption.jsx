import React from "react";
import PropTypes from "prop-types";
import "./_role-option.less";

const RoleOption = props => {
  const containerClasses = `role-option-container ${
    props.option === "Fill" ? "fill" : ""
  }`;

  const optionClasses = `role-option ${props.option}`;

  return (
    <div className={containerClasses}>
      <span className="role-label">{props.option}</span>
      <div
        onClick={e => props.handleRoleChange(e, props.option)}
        className={optionClasses}
      />
    </div>
  );
};

RoleOption.propTypes = {
  option: PropTypes.string,
  handleRoleChange: PropTypes.func
};

export default RoleOption;
