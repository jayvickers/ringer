import React, { useState } from "react";
import PropTypes from "prop-types";
import "./_role-option.less";

const RoleOption = props => {
  const [state, setState] = useState({
    popupOpen: props.isOpen,
    selectedValue: null
  });

  const containerClasses = `role-option-container ${
    props.option == "Fill" ? "fill" : ""
  }`;

  return (
    <div className={containerClasses}>
      <span className="role-label">{props.option}</span>
      <div
        onClick={() => props.handleRoleChange(props.option)}
        className={props.isOpen ? "is-open" : "role-option"}
      />
    </div>
  );
};

RoleOption.propTypes = {
  option: PropTypes.string,
  handleRoleChange: PropTypes.func
};

export default RoleOption;