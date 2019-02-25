import React from "react";
import ResultCard from "./ResultCard";
// import PropTypes from "prop-types";
import "./_results-pane.less";

const ResultsPane = props => {
  //probably will iterate through array and return 1 card per match
  //for now can just force 5 cards for templating
  const getResultCards = (rank, summonerName, winRate) => {
    return (
      <ResultCard rank={rank} summonerName={summonerName} winRate={winRate} />
    );
  };
  const getResultsPaneBodyContent = () => {
    return (
      <div className="results-pane-content-container">
        <h3> {"muh results"}</h3>
        <div className="result-card-row">
          {getResultCards("iron 5", "jtsw", "0%")}
          {getResultCards("challenger", "xmithie", "10%")}
          {getResultCards("iron 5", "CELLSINTERLINKED", "20%")}
          {getResultCards("challenger", "doublelift", "30%")}
          {getResultCards("challenger", "corejj", "40%")}
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
