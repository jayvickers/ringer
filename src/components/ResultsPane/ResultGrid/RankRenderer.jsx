import React from "react";
import PropTypes from "prop-types";
//import testdata from "./testdata";
import RankImage from "../RankImage";
import classNames from "classnames";
const RankRenderer = params => {
  const renderGridRank = () => {
    const containerClasses = classNames({
      "grid-rank-container": true
      // "grid-image-cell-container": true
    });
    return (
      <div className={containerClasses}>
        <RankImage
          gamesPlayed={params.data.games}
          gridVersion={params.gridVersion}
          imgSrc={"images/emblems/"}
          rank={params.data.rank}
          summoner={params.data.summoner}
          winrate={params.data.winrate}
        />
      </div>
    );
  };

  return renderGridRank();
};

RankRenderer.propTypes = {
  rank: PropTypes.string
};

export default RankRenderer;
