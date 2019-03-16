import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./_result-champion.less";

const ResultChampion = props => {
  const getChampionImage = () => {
    const containerClasses = classNames({
      "champion-image": true,
      [`${props.champion}`]: true,
      "grid-image": props.gridVersion
    });

    return <div className={containerClasses} />;
  };
  const getChampionInfo = () => {
    const containerClasses = classNames({
      low: props.winRate <= 49,
      med: props.winRate > 49 && props.winRate <= 55,
      high: props.winRate > 50
    });
    return (
      <div className="champion-info-container">
        {props.gridVersion ? (
          <span className="champion-name">{props.champion}</span>
        ) : null}
        <span className={containerClasses}>{props.winRate + "% winrate"}</span>
        <span className="champion-info-subtitle">{props.gamesPlayed}</span>
      </div>
    );
  };
  const containerClasses = classNames({
    "results-champion-container": true,
    grid: props.gridVersion
  });
  return (
    <div className={containerClasses}>
      {getChampionImage()}
      {getChampionInfo()}
    </div>
  );
};

ResultChampion.propTypes = {
  champion: PropTypes.string,
  gamesPlayed: PropTypes.string,
  gridVersion: PropTypes.bool,
  winRate: PropTypes.number
};

export default ResultChampion;
