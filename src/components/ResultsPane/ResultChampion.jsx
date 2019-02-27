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
    const containerClasses = classNames({
      low: props.winRate <= 45,
      med: props.winRate > 45 && props.winRate <= 50,
      "med-high": props.winRate > 50 && props.winRate <= 60,
      high: props.winRate > 60
    });
    return (
      <div className="champion-info-container">
        <span className={containerClasses}>{props.winRate + " % winrate"}</span>
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
  winRate: PropTypes.number
};

export default ResultChampion;
