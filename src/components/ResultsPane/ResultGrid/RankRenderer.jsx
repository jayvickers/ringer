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
        <RankImage hideLabel={params.hideLabel} rank={params.data.rank} />
      </div>
    );
  };

  return renderGridRank();
};

RankRenderer.propTypes = {
  rank: PropTypes.string
};

export default RankRenderer;
