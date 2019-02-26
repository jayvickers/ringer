import React from "react";
import PropTypes from "prop-types";
import ResultChampion from "./ResultChampion";
import ResultRank from "./ResultRank";
import "./_result-card.less";

const ResultCard = props => {
  const getRank = () => {
    return (
      <ResultRank
        primaryRole={props.primaryRole}
        rank={props.rank}
        secondaryRole={props.secondaryRole}
        winRate={props.winRate}
      />
    );
  };

  const getResultCardBodyContent = () => {
    return (
      <div className="result-card-content-container">
        {getSummonerName()} <hr /> {getRank()} <hr />
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
          winRate={"69% winrate"}
        />
        <ResultChampion
          champion="Vladimir"
          gamesPlayed="10 games played"
          winRate={"50% winrate"}
        />
        <ResultChampion
          champion="Kassadin"
          gamesPlayed="5 games played"
          winRate={"20% winrate"}
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
  rank: PropTypes.string,
  secondaryRole: PropTypes.string,
  summonerName: PropTypes.string,
  winRate: PropTypes.string
};

export default ResultCard;
