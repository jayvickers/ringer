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
    primaryRank,
    secondaryRole,
    secondaryRank,
    summonerName,
    primaryWinRate,
    secondaryWinRate
  ) => {
    return (
      <ResultCard
        primaryRole={primaryRole}
        primaryRank={primaryRank}
        secondaryRole={secondaryRole}
        secondaryRank={secondaryRank}
        summonerName={summonerName}
        primaryWinRate={primaryWinRate}
        secondaryWinRate={secondaryWinRate}
      />
    );
  };
  const getResultsPaneBodyContent = () => {
    return (
      <div className="results-pane-content-container">
        <h3> {"muh results"}</h3>
        <div className="result-card-row">
          {getResultCards(
            Roles.top,
            "iron 5",
            Roles.jungle,
            "bronze 5",
            "jtsw",
            0,
            60
          )}
          {getResultCards(
            Roles.jungle,
            "challenger",
            Roles.top,
            "grand master",
            "xmithie",
            10,
            70
          )}
          {getResultCards(
            Roles.mid,
            "iron 5",
            Roles.bot,
            "bronze 5",
            "CELLSINTERLINKED",
            45,
            30
          )}
          {getResultCards(
            Roles.bot,
            "challenger",
            Roles.jungle,
            "diamond 5",
            "doublelift",
            50,
            80
          )}
          {getResultCards(
            Roles.support,
            "challenger",
            Roles.mid,
            "platinum 4",
            "corejj",
            55,
            100
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
