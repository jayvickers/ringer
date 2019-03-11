import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./_role-option.less";

const RoleOption = props => {
  const getStandardVersion = () => {
    const containerClasses = classNames({
      "role-option-container": true,
      placeholder: props.placeHolder,
      disabled: props.isDisabled,
      "has-hover": props.hasHover
    });

    const optionClasses = classNames({ [`role-option ${props.option}`]: true });

    return (
      <div
        onClick={e => props.handleRoleChange(e, props.option)}
        className={containerClasses}
      >
        <span className="role-label">{props.option}</span>
        <div className={optionClasses} />
      </div>
    );
  };

  const getGridVersion = () => {
    const containerClasses = classNames({
      "role-option-container": true,
      placeholder: props.placeHolder,
      disabled: props.isDisabled,
      "has-hover": props.hasHover
    });

    const optionClasses = classNames({ [`role-option ${props.option}`]: true });

    return (
      <div
        onClick={e => props.handleRoleChange(e, props.option)}
        className={containerClasses}
      >
        <span className="role-label-grid">{props.option}</span>
        <div className={optionClasses} />
      </div>
    );
  };
  return props.gridVersion ? getGridVersion() : getStandardVersion();
};

RoleOption.propTypes = {
  gridVersion: PropTypes.bool,
  hasHover: PropTypes.bool,
  isDisabled: PropTypes.bool,
  option: PropTypes.string,
  handleRoleChange: PropTypes.func,
  placeHolder: PropTypes.bool
};

export default RoleOption;
