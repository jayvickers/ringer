import React from "react";
import PropTypes from "prop-types";
import "./_result-card.less";

const ResultCard = props => {
  const getRank = () => {
    return (
      <div className="result-card-rank-container">
        {`${props.rank} - ${props.winRate} winrate - 100 games`}
      </div>
    );
  };

  const getResultCardBodyContent = () => {
    return (
      <div className="result-card-content-container">
        {getSummonerName()} {getRank()} {getTopChampions()}
      </div>
    );
  };

  const getSummonerName = () => {
    return (
      <div className="result-card-name-container"> {props.summonerName}</div>
    );
  };

  const getTopChampions = () => {
    return (
      <div className="result-card-top-champions-container">
        <div className="champion-container">
          Teemo - 25% winrate - 100 games
        </div>
      </div>
    );
  };

  return (
    <div className="results-card-container">{getResultCardBodyContent()}</div>
  );
};

ResultCard.propTypes = {
  rank: PropTypes.string,
  summonerName: PropTypes.string,
  winRate: PropTypes.string
};

export default ResultCard;
