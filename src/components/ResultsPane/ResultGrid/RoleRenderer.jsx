import React from "react";
import PropTypes from "prop-types";
import RoleOption from "../../Shared/RoleSelector/RoleOption";
//import classNames from "classnames";
const RoleRenderer = params => {
  const renderGridRole = () => {
    return (
      <div className="grid-role-container">
        <RoleOption
          gamesPlayed={params.data.gamesMainRole}
          gridVersion={params.gridVersion}
          imgSrc={"images/positions/"}
          option={params.data.mainRole}
          winrate={params.data.winrateMainRole}
        />
      </div>
    );
  };

  return renderGridRole();
};

RoleRenderer.propTypes = {
  rank: PropTypes.string
};

export default RoleRenderer;
