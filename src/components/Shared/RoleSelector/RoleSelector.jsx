import React, { useState } from "react";
import PropTypes from "prop-types";
import RoleWindow from "./RoleWindow";
import "./_role-selector.less";

const RoleSelector = props => {
  const [state, setState] = useState({
    popupOpen: false,
    primaryRole: null
  });

  const handleChange = () => {
    var e = document.getElementById("popupSelect");
    console.log("here");
    // var strUser = e.options[e.selectedIndex].value;
    // setState({ popupOpen: false, selectedValue: strUser });
    if (e) {
      console.log(e.options[e.selectedIndex].value);
      var strUser = e.options[e.selectedIndex].value;
      // setState({ popupOpen: false, selectedValue: strUser });
    }
  };

  const handleClick = () => {
    setState({ popupOpen: true });
  };

  const setPrimaryRole = inputRole => {
    setState({ primaryRole: inputRole });
  };

  return (
    <div className="role-selector-container">
      <div onClick={() => handleClick()} id="baseDiv">
        {state.primaryRole || "Click Me"}
      </div>
      <RoleWindow isOpen={state.popupOpen} handleRoleChange={setPrimaryRole} />
    </div>
  );
};

RoleSelector.propTypes = {
  buttonText: PropTypes.string
};

export default RoleSelector;
