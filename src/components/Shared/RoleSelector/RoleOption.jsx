import React from "react";
import PropTypes from "prop-types";
import "./_role-option.less";

const RoleOption = props => {
  const containerClasses = `role-option-container ${
    props.placeHolder ? "placeholder" : ""
  } ${props.isDisabled ? "disabled" : ""}`;

  const optionClasses = `role-option ${props.option}`;

  return (
    <div className={containerClasses}>
      <span className="role-label">{props.option}</span>
      <div className="testing" />
      <div
        onClick={e => props.handleRoleChange(e, props.option)}
        className={optionClasses}
      />
    </div>
  );
};

RoleOption.propTypes = {
  isDisabled: PropTypes.bool,
  option: PropTypes.string,
  handleRoleChange: PropTypes.func,
  placeHolder: PropTypes.bool
};

export default RoleOption;
