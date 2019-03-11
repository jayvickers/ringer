import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./_rank-image.less";
const RankImage = props => {
  const getGridInfo = () => {
    const winrate = props.winrate;
    const spanClasses = classNames({
      low: winrate <= 49,
      med: winrate > 49 && winrate <= 55,
      high: winrate > 55
    });
    const imageClasses = classNames({
      "rank-image": true,
      [`${props.size}`]: props.size
    });
    return (
      <div className="rank-image-container grid">
        <div className={imageClasses} />
        <div className="info-container">
          <span className="rank-label">{props.rank}</span>
          <span className={spanClasses}>{props.winrate}% winrate</span>
          <span className="rank-games-played">{props.gamesPlayed} games</span>
        </div>
      </div>
    );
  };
  const getStandardImage = () => {
    const imageClasses = classNames({
      "rank-image": true,
      [`${props.size}`]: props.size
    });
    return (
      <div className="rank-image-container">
        <span className="rank-label">{props.rank}</span>
        <div className={imageClasses} />
      </div>
    );
  };

  const getImage = () => {
    return props.gridVersion ? getGridInfo() : getStandardImage();
  };

  return getImage();
};

RankImage.propTypes = {
  gamesPlayed: PropTypes.string,
  gridVersion: PropTypes.bool,
  rank: PropTypes.string,
  size: PropTypes.string,
  winrate: PropTypes.string
};

export default RankImage;
