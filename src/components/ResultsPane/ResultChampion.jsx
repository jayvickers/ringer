import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./_result-champion.less";

const ResultChampion = props => {
  const getChampionImage = () => {
    const containerClasses = classNames({
      "champion-image": true,
      [`${props.champion}`]: true
    });

    return <div className={containerClasses} />;
  };
  const getChampionInfo = () => {
    return (
      <div className="champion-info-container">
        {props.winRate}
        <div className="champion-info-subtitle">{props.gamesPlayed}</div>
      </div>
    );
  };

  return (
    <div className="results-champion-container">
      {getChampionImage()}
      {getChampionInfo()}
    </div>
  );
};

ResultChampion.propTypes = {
  champion: PropTypes.string,
  gamesPlayed: PropTypes.string,
  winRate: PropTypes.string
};

export default ResultChampion;
