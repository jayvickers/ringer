import React, { useState } from "react";
import classNames from "classnames";
import ActionPane from "../ActionPane/ActionPane";
import ResultsPane from "../ResultsPane/ResultsPane";
import "./_top-pane.less";
import posed from "react-pose";

const TopPane = props => {
  const [showResultsPane, setShowResultsPane] = useState(false);
  const topPaneClasses = classNames({
    "top-pane": true,
    "has-results-pane": showResultsPane
  });

  const Box2 = posed.div({
    closed: { opacity: 0, y: "100%" },
    open: {
      y: "0",
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 200, damping: 20 },
        default: { duration: 150 }
      }
    }
  });

  return (
    <div key="d" className={topPaneClasses}>
      <Box2
        initialPose="closed"
        pose="open"
        key="aa"
        className="top-pane-text-container"
      >
        <h1> Find a teammate in seconds...</h1>
        {/* <h2> it's dangerous to go alone!</h2> */}
      </Box2>

      {showResultsPane ? (
        <div key="b">
          <ResultsPane />
        </div>
      ) : (
        <ActionPane headerText="ringer.gg" />
      )}
    </div>
  );
};
export default TopPane;
