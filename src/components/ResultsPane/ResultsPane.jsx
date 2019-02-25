import React from "react";
import ResultCard from "./ResultCard";
// import PropTypes from "prop-types";
import "./_results-pane.less";

const ResultsPane = props => {
  //probably will iterate through array and return 1 card per match
  //for now can just force 5 cards for templating
  const getResultCards = summonerName => {
    return <ResultCard summonerName={summonerName} />;
  };
  const getResultsPaneBodyContent = () => {
    return (
      <div className="results-pane-content-container">
        <h3> {"muh results"}</h3>
        <div className="result-card-row">
          {getResultCards("jtsw")}
          {getResultCards("xmithie")}
          {getResultCards("CELLSINTERLINKED")}
          {getResultCards("doublelift")}
          {getResultCards("corejj")}
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
