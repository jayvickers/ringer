import React, { useState } from "react";
import PropTypes from "prop-types";
import RoleOption from "./RoleOption";
import "./_role-window.less";

const RoleWindow = props => {
  const [state, setState] = useState({
    popupOpen: props.isOpen,
    selectedValue: null
  });

  return (
    <div className={props.isOpen ? "is-open" : ""} id="popUpDiv">
      <RoleOption option="Mid" />
      {/* <select onChange={props.handleChange()} id="popupSelect">
        <option value="First">First</option>
        <option value="Second">Second</option>
        <option value="Third">Third</option>
      </select> */}
    </div>
  );
};

RoleWindow.propTypes = {
  handleChange: PropTypes.func,
  isOpen: PropTypes.bool
};

export default RoleWindow;
