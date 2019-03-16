import React from "react";
import PropTypes from "prop-types";
import RoleOption from "./RoleOption";
import Roles from "../../Shared/Types/Roles.js";
import posed from "react-pose";

const RoleWindow = props => {
  const handleClick = e => {
    props.handleRoleChange(e, props.currentlySelected);
  };

  const Modal = posed.div({
    enter: {
      y: 0,
      // opacity: 1,
      //delay: 300,
      transition: {
        y: { type: "spring", stiffness: 1000, damping: 30 },
        default: { duration: 250 }
      }
    },
    exit: {
      y: 50,
      // opacity: 0,
      transition: { duration: 150 }
    }
  });

  return (
    <div
      onClick={e => handleClick(e)}
      className={props.isOpen ? "is-open" : ""}
      id="popUpDiv"
    >
      <Modal className="option-container">
        <h2>Click icon to select role</h2>
        <RoleOption
          hasHover
          isDisabled={props.disabledRole === Roles.top}
          option={Roles.top}
          handleRoleChange={props.handleRoleChange}
        />
        <RoleOption
          hasHover
          isDisabled={props.disabledRole === Roles.jungle}
          option={Roles.jungle}
          handleRoleChange={props.handleRoleChange}
        />
        <RoleOption
          hasHover
          isDisabled={props.disabledRole === Roles.mid}
          option={Roles.mid}
          handleRoleChange={props.handleRoleChange}
        />
        <RoleOption
          hasHover
          isDisabled={props.disabledRole === Roles.bot}
          option={Roles.bot}
          handleRoleChange={props.handleRoleChange}
        />
        <RoleOption
          hasHover
          isDisabled={props.disabledRole === Roles.support}
          option={Roles.support}
          handleRoleChange={props.handleRoleChange}
        />
        <RoleOption
          hasHover
          option={Roles.fill}
          handleRoleChange={props.handleRoleChange}
        />
        <RoleOption
          currentlySelected
          option={props.currentlySelected}
          handleRoleChange={props.handleRoleChange}
        />
      </Modal>
    </div>
  );
};

RoleWindow.propTypes = {
  currentlySelected: PropTypes.string,
  disabledRole: PropTypes.string,
  handleRoleChange: PropTypes.func,
  isOpen: PropTypes.bool
};

export default RoleWindow;
