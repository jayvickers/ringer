// import React from "react";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./_role-selector.less";

const RoleSelector = props => {
  //   const [popupOpen, setPopupOpen] = useState({ displayPopup: false });
  // const [selectedValue, setSelectedValue] = useState(false);
  const [state, setState] = useState({
    popupOpen: false,
    selectedValue: null
  });

  const handleChange = () => {
    var e = document.getElementById("popupSelect");
    var strUser = e.options[e.selectedIndex].value;
    setState({ popupOpen: false, selectedValue: strUser });
  };

  const handleClick = () => {
    setState({ popupOpen: true });
  };

  return (
    <div className="role-selector-container">
      <div onClick={() => handleClick()} id="baseDiv">
        {state.selectedValue || "Click Me"}
      </div>
      <div className={state.popupOpen ? "is-open" : ""} id="popUpDiv">
        <select onChange={() => handleChange()} id="popupSelect">
          <option value="First">First</option>
          <option value="Second">Second</option>
          <option value="Third">Third</option>
        </select>
      </div>
    </div>
  );
};

RoleSelector.propTypes = {
  buttonText: PropTypes.string
};

export default RoleSelector;
