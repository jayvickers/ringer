import React from "react";
import PropTypes from "prop-types";
//import testdata from "./testdata";
import RankImage from "../RankImage";
//import classNames from "classnames";
// import "./_result-grid.less";
const RoleRenderer = params => {
  const renderGridRole = () => {
    return (
      <div className="grid-rank-container">
        <RankImage
          gamesPlayed={params.data.games}
          gridVersion={params.gridVersion}
          imgSrc={"../../images/emblems/Emblem_Challenger.png"}
          rank={params.data.rank}
          winrate={params.data.winrate}
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
