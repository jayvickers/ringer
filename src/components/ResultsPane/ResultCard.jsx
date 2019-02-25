import React from "react";
import PropTypes from "prop-types";
import "./_result-card.less";

const ResultCard = props => {
  const getRank = () => {
    return (
      <div className="result-card-rank-container"> {props.summonerName}</div>
    );
  };

  const getResultCardBodyContent = () => {
    return (
      <div className="result-card-content-container"> {props.summonerName}</div>
    );
  };

  return (
    <div className="results-card-container">{getResultCardBodyContent()}</div>
  );
};

ResultCard.propTypes = {
  summonerName: PropTypes.string
};

export default ResultCard;
