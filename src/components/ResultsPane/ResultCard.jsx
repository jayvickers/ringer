import React from "react";
import PropTypes from "prop-types";
import ResultChampion from "./ResultChampion";
import ResultRank from "./ResultRank";
import "./_result-card.less";

const ResultCard = props => {
  const getRank = (role, rank, winrate) => {
    return <ResultRank role={role} rank={rank} winRate={winrate} />;
  };

  const getResultCardBodyContent = () => {
    return (
      <div className="result-card-content-container">
        {getSummonerName()}
        {getRank(props.primaryRole, props.primaryRank, props.primaryWinRate)}
        {getRank(
          props.secondaryRole,
          props.secondaryRank,
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
  primaryRank: PropTypes.string,
  secondaryRole: PropTypes.string,
  secondaryRank: PropTypes.string,
  summonerName: PropTypes.string,
  primaryWinRate: PropTypes.string,
  secondaryWinRate: PropTypes.string
};

export default ResultCard;
