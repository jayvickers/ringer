import React from "react";
import PropTypes from "prop-types";
//import testdata from "./testdata";
import RankImage from "../RankImage";
//import classNames from "classnames";
// import "./_result-grid.less";
const RankRenderer = params => {
  const renderGridRank = () => {
    return (
      <div className="grid-rank-container">
        <RankImage
          gridVersion={params.gridVersion}
          rank={params.data.rank}
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
