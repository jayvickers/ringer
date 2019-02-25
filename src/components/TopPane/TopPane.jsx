import React, { useState } from "react";
import classNames from "classnames";
import ActionPane from "../ActionPane/ActionPane";
import ResultsPane from "../ResultsPane/ResultsPane";
import "./_top-pane.less";

const TopPane = props => {
  const [showResultsPane, setShowResultsPane] = useState(true);
  const topPaneClasses = classNames({
    "top-pane": true,
    "has-results-pane": showResultsPane
  });
  return (
    <div className={topPaneClasses}>
      <div className="top-pane-text-container">
        <h1> Find a teammate in seconds...</h1>
        {/* <h2> it's dangerous to go alone!</h2> */}
      </div>
      {showResultsPane ? (
        <ResultsPane />
      ) : (
        <ActionPane headerText="Ringer.gg" />
      )}
    </div>
  );
};
export default TopPane;
