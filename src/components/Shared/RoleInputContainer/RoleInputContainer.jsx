import React, { useState } from "react";
import PropTypes from "prop-types";
import RoleSelector from "../RoleSelector/RoleSelector";
import "./_role-input-container.less";

const RoleInputContainer = props => {
  const [primaryRole, setPrimaryRole] = useState(null);
  const [secondaryRole, setSecondaryRole] = useState(null);

  const handleClick = (e, inputRole, isPrimary) => {
    if (isPrimary) {
      if (inputRole === secondaryRole) {
        setSecondaryRole(primaryRole);
        setPrimaryRole(inputRole);
      }
      setPrimaryRole(inputRole);
    } else {
      setSecondaryRole(inputRole);
    }
  };

  /* 
  logic:

  DISABLE SECOND ROLESELECTOR
  -if Fill is primary role, dont allow secondary role option

  DISABLE INDIVIDUAL OPTIONS INSIDE THE POPUP WINDOW
  -nothing is disabled in the primary role selector. If you pick the one that was already selected, it just stays the same. 
    If you pick your current secondary role, it switches to your main role, and your secondary role becomes what your primary role was

  -primary role selection is disabled within the secondary role selector,if you pick your current secondary role again it just stays the same
  */

  return (
    <div className="ringer-input-container">
      <h4>
        {props.lfRoles ? "Select desired duo's roles" : "Select your roles"}
      </h4>
      <div className="role-input-container">
        <RoleSelector isPrimary passRoles={handleClick} />
        {primaryRole && primaryRole !== "Fill" && (
          <RoleSelector
            disabledRole={primaryRole !== "Fill" ? primaryRole : null}
            overRide={secondaryRole}
            passRoles={handleClick}
          />
        )}
      </div>
    </div>
  );
};

RoleInputContainer.propTypes = {
  lfRoles: PropTypes.bool
};

export default RoleInputContainer;
