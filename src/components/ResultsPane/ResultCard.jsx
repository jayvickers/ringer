import React from "react";
import PropTypes from "prop-types";
import ResultChampion from "./ResultChampion";
import ResultRank from "./ResultRank";
import "./_result-card.less";

const ResultCard = props => {
  const getRank = (
    primaryRole,
    primaryWinRate,
    rank,
    secondaryRole,
    secondaryWinRate
  ) => {
    return (
      <ResultRank
        primaryRole={primaryRole}
        primaryWinRate={primaryWinRate}
        rank={rank}
        secondaryRole={secondaryRole}
        secondaryWinRate={secondaryWinRate}
      />
    );
  };

  const getResultCardBodyContent = () => {
    return (
      <div className="result-card-content-container">
        {getSummonerName()}
        {getRank(
          props.primaryRole,
          props.primaryWinRate,
          props.primaryRank,
          props.secondaryRole,
          props.secondaryWinRate
        )}

        {getTopChampions()}
      </div>
    );
  };

  const getSummonerName = () => {
    return (
      <h3>{props.summonerName}</h3>
      // <div className="result-card-name-container">{props.summonerName}</div>
    );
  };

  const getTopChampions = () => {
    return (
      <div className="result-card-top-champions-container">
        <ResultChampion
          champion="Velkoz"
          gamesPlayed="20 games played"
          winRate={69}
        />
        <ResultChampion
          champion="Vladimir"
          gamesPlayed="10 games played"
          winRate={50}
        />
        <ResultChampion
          champion="Kassadin"
          gamesPlayed="5 games played"
          winRate={20}
        />
      </div>
    );
  };

  return (
    <div className="results-card-container">{getResultCardBodyContent()}</div>
  );
};

ResultCard.propTypes = {
  primaryRole: PropTypes.string,
  primaryRank: PropTypes.string,
  secondaryRole: PropTypes.string,
  secondaryRank: PropTypes.string,
  summonerName: PropTypes.string,
  primaryWinRate: PropTypes.number,
  secondaryWinRate: PropTypes.number
};

export default ResultCard;
