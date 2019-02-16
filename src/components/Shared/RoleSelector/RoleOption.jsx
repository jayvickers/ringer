import React, { useState } from "react";
import PropTypes from "prop-types";
import "./_role-option.less";

const RoleOption = props => {
  const [state, setState] = useState({
    popupOpen: props.isOpen,
    selectedValue: null
  });

  return (
    <div className={props.isOpen ? "is-open" : "role-option-container"}>
      {props.option}
    </div>
  );
};

RoleOption.propTypes = {
  option: PropTypes.string
};

export default RoleOption;
