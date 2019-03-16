import React, { useState } from "react";
import ResultCard from "./ResultCard";
import ResultGrid from "./ResultGrid/ResultGrid";
import Roles from "../Shared/Types/Roles";
import "./_results-pane.less";
import posed, { PoseGroup } from "react-pose";

const ResultsPane = props => {
  //only show grid button if more than 5 matches found
  const [showResultsGrid, setShowResultsGrid] = useState(false);
  //probably will iterate through array and return 1 card per match
  //for now can just force 5 cards for templating

  const Box = posed.div({
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -100 }
  });

  const Box2 = posed.div({
    open: {
      width: "90%",
      delayChildren: 200,
      staggerChildren: 50
    },
    closed: { width: "0%", delay: 300 }
  });

  const getResultCardRow = () => {
    return (
      <div key="dd" className="result-card-row">
        {getResultCard(
          Roles.top,
          "bronze 5",
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
          "diamond 2",
          Roles.jungle,
          "diamond 5",
          "doublelift",
          50,
          80
        )}
        {getResultCard(
          Roles.support,
          "master",
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
      <Box>
        <ResultCard
          primaryRole={primaryRole}
          primaryRank={primaryRank}
          secondaryRole={secondaryRole}
          secondaryRank={secondaryRank}
          summonerName={summonerName}
          primaryWinRate={primaryWinRate}
          secondaryWinRate={secondaryWinRate}
        />
      </Box>
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
    <PoseGroup>
      <Box2
        key="dw"
        initialPose="closed"
        pose="open"
        className="results-pane-container"
      >
        {getResultsPaneBodyContent()}
      </Box2>
    </PoseGroup>
  );
};

ResultsPane.propTypes = {};

export default ResultsPane;
