import React from "react";
import PropTypes from "prop-types";
//import testdata from "./testdata";
import ResultChampion from "../../ResultsPane/ResultChampion";
import classNames from "classnames";
const MostPlayedRenderer = params => {
  const renderGridChampions = () => {
    const containerClasses = classNames({
      "grid-top-champions-container": true
      // "grid-image-cell-container": true
    });

    const champList = params.data.topChamps.map(function(rowEntry) {
      return (
        <li key={params.data.summoner + rowEntry.champion.name}>
          <ResultChampion
            champion={rowEntry.champion.name}
            gamesPlayed={rowEntry.champion.games + " games"}
            gridVersion={params.gridVersion}
            winRate={rowEntry.champion.winrate}
          />
        </li>
      );
    });

    return <div className={containerClasses}>{champList}</div>;
  };

  return renderGridChampions();
};

MostPlayedRenderer.propTypes = {
  topChamps: PropTypes.array
};

export default MostPlayedRenderer;
