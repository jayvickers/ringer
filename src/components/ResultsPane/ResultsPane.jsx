import React from "react";
import ResultCard from "./ResultCard";
import Roles from "../Shared/Types/Roles";
// import PropTypes from "prop-types";
import "./_results-pane.less";

const ResultsPane = props => {
  //probably will iterate through array and return 1 card per match
  //for now can just force 5 cards for templating
  const getResultCards = (
    primaryRole,
    rank,
    secondaryRole,
    summonerName,
    winRate
  ) => {
    return (
      <ResultCard
        primaryRole={primaryRole}
        rank={rank}
        secondaryRole={secondaryRole}
        summonerName={summonerName}
        winRate={winRate}
      />
    );
  };
  const getResultsPaneBodyContent = () => {
    return (
      <div className="results-pane-content-container">
        <h3> {"muh results"}</h3>
        <div className="result-card-row">
          {getResultCards(Roles.top, "iron 5", Roles.jungle, "jtsw", "0%")}
          {getResultCards(
            Roles.jungle,
            "challenger",
            Roles.top,
            "xmithie",
            "10%"
          )}
          {getResultCards(
            Roles.mid,
            "iron 5",
            Roles.bot,
            "CELLSINTERLINKED",
            "20%"
          )}
          {getResultCards(
            Roles.bot,
            "challenger",
            Roles.jungle,
            "doublelift",
            "30%"
          )}
          {getResultCards(
            Roles.support,
            "challenger",
            Roles.mid,
            "corejj",
            "40%"
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="results-pane-container">{getResultsPaneBodyContent()}</div>
  );
};

ResultsPane.propTypes = {};

export default ResultsPane;
