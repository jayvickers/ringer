import React from "react";
import PropTypes from "prop-types";
import RoleOption from "../../Shared/RoleSelector/RoleOption";
import classNames from "classnames";
const RoleRenderer = params => {
  const renderGridRole = () => {
    const containerClasses = classNames({
      "grid-role-container": true,
      "grid-image-cell-container": true
    });
    return (
      <div className={containerClasses}>
        <RoleOption
          gamesPlayed={
            params.secondary
              ? params.data.gamesSecondaryRole
              : params.data.gamesMainRole
          }
          gridVersion={params.gridVersion}
          imgSrc={"images/positions/"}
          option={
            params.secondary ? params.data.secondaryRole : params.data.mainRole
          }
          winrate={
            params.secondary
              ? params.data.winrateSecondaryRole
              : params.data.winrateMainRole
          }
        />
      </div>
    );
  };

  return renderGridRole();
};

RoleRenderer.propTypes = {
  secondary: PropTypes.bool
};

export default RoleRenderer;
