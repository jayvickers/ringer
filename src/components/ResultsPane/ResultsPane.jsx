import React from "react";
// import PropTypes from "prop-types";
import "./_results-pane.less";

const ResultsPane = props => {
  const getResultsPaneBodyContent = () => {
    return (
      <div className="results-pane-content-container">
        <h3> {"muh results"}</h3>
      </div>
    );
  };

  return (
    <div className="results-pane-container">{getResultsPaneBodyContent()}</div>
  );
};

ResultsPane.propTypes = {};

export default ResultsPane;
