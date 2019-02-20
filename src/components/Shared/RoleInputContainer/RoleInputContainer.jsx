import React, { useState } from "react";
import PropTypes from "prop-types";
import RoleSelector from "../RoleSelector/RoleSelector";
import "./_role-input-container.less";

const RoleInputContainer = props => {
  const [primaryRole, setPrimaryRole] = useState(null);
  const [secondaryRole, setSecondaryRole] = useState(null);

  const handleClick = (e, inputRole, isPrimary) => {
    if (isPrimary) {
      setPrimaryRole(inputRole);
    } else {
      setSecondaryRole(inputRole);
    }
  };

  return (
    <div className="ringer-input-container">
      <h4>Select your roles</h4>
      <div className="role-input-container">
        <RoleSelector isPrimary passRoles={handleClick} />
        {primaryRole && primaryRole !== "Fill" && (
          <RoleSelector
            disabledRole={primaryRole !== "Fill" ? primaryRole : null}
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
