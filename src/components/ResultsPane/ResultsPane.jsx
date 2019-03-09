import React, { useState } from "react";
import ResultCard from "./ResultCard";
import ResultGrid from "./ResultGrid";
import Roles from "../Shared/Types/Roles";
import "./_results-pane.less";

const ResultsPane = props => {
  //only show grid button if more than 5 matches found
  const [showResultsGrid, setShowResultsGrid] = useState(true);
  //probably will iterate through array and return 1 card per match
  //for now can just force 5 cards for templating

  const getResultCardRow = () => {
    return (
      <div className="result-card-row">
        {getResultCard(
          Roles.top,
          "iron 5",
          Roles.jungle,
          "bronze 5",
          "jtsw",
          0,
          60
        )}
        {getResultCard(
          Roles.jungle,
          "challenger",
          Roles.top,
          "grand master",
          "xmithie",
          10,
          70
        )}
        {getResultCard(
          Roles.mid,
          "iron 5",
          Roles.bot,
          "bronze 5",
          "CELLSINTERLINKED",
          45,
          30
        )}
        {getResultCard(
          Roles.bot,
          "challenger",
          Roles.jungle,
          "diamond 5",
          "doublelift",
          50,
          80
        )}
        {getResultCard(
          Roles.support,
          "challenger",
          Roles.mid,
          "platinum 4",
          "corejj",
          55,
          100
        )}
      </div>
    );
  };
  const getResultCard = (
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

  const getResultGrid = () => {
    return <ResultGrid />;
  };

  const getResultsPaneBodyContent = () => {
    return (
      <div className="results-pane-content-container">
        <h3>
          {
            "ringers that closest match your specification and minimum duo requirements"
          }
        </h3>
        {showResultsGrid ? getResultGrid() : getResultCardRow()}
      </div>
    );
  };

  return (
    <div className="results-pane-container">{getResultsPaneBodyContent()}</div>
  );
};

ResultsPane.propTypes = {};

export default ResultsPane;
