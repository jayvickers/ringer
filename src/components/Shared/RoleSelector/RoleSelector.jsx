import React, { useState } from "react";
import PropTypes from "prop-types";
import RoleWindow from "./RoleWindow";
import RoleOption from "./RoleOption";
import Roles from "../../Shared/Types/Roles.js";
import "./_role-selector.less";
import posed, { PoseGroup } from "react-pose";

const RoleSelector = props => {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleClick = () => {
    setPopupOpen(true);
  };

  const setRole = (e, inputRole) => {
    e.stopPropagation();
    setPopupOpen(false);
    props.passRoles(e, inputRole, props.isPrimary);
  };

  const Box = posed.div({
    enter: { opacity: 1, transition: { duration: 250 } },
    exit: { opacity: 0, transition: { duration: 150 } }
  });

  return (
    <div className="role-selector-container">
      <div onClick={() => handleClick()} id="baseDiv">
        <RoleOption
          option={props.role ? props.role : Roles.fill}
          handleRoleChange={() => {}}
          hasHover
          placeHolder
        />
      </div>
      <PoseGroup>
        {popupOpen && (
          <Box
            className="box"
            key="window"
            pose={popupOpen ? "visible" : "hidden"}
          >
            <RoleWindow
              currentlySelected={props.role ? props.role : Roles.fill}
              disabledRole={props.disabledRole}
              isOpen={popupOpen}
              handleRoleChange={setRole}
            />
          </Box>
        )}
      </PoseGroup>
    </div>
  );
};

RoleSelector.propTypes = {
  disabledRole: PropTypes.string,
  isPrimary: PropTypes.bool,
  overRide: PropTypes.string,
  passRoles: PropTypes.func,
  role: PropTypes.string
};

export default RoleSelector;
