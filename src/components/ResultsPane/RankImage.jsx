import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ImagePaths from "../Shared/Types/ImagePaths";
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
      [`${props.size}`]: props.size,
      "grid-version": true
    });

    const imgPath = getImagePath();

    return (
      <div className="rank-image-container grid">
        <img alt="rank" src={props.imgSrc + imgPath} className={imageClasses} />
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
    const imgPath = getImagePath();
    return (
      <div className="rank-image-container">
        <span className="rank-label">{props.rank}</span>
        <img alt="rank" src={props.imgSrc + imgPath} className={imageClasses} />
      </div>
    );
  };

  const getImage = () => {
    return props.gridVersion ? getGridInfo() : getStandardImage();
  };

  const getImagePath = () => {
    if (!props.rank) {
      return ImagePaths.iron;
    }

    const curRank = props.rank.toLowerCase().replace(/\s+/g, "");

    if (curRank.includes("iron")) {
      return ImagePaths.iron;
    } else if (curRank.includes("bronze")) {
      return ImagePaths.bronze;
    } else if (curRank.includes("silver")) {
      return ImagePaths.silver;
    } else if (curRank.includes("gold")) {
      return ImagePaths.gold;
    } else if (curRank.includes("platinum")) {
      return ImagePaths.platinum;
    } else if (curRank.includes("diamond")) {
      return ImagePaths.diamond;
    } else if (curRank.includes("master")) {
      return ImagePaths.master;
    } else if (curRank.includes("grandmaster")) {
      return ImagePaths.grandmaster;
    } else if (curRank.includes("challenger")) {
      return ImagePaths.challenger;
    }
  };

  return getImage();
};

RankImage.propTypes = {
  gamesPlayed: PropTypes.string,
  gridVersion: PropTypes.bool,
  imgSrc: PropTypes.string,
  rank: PropTypes.string,
  size: PropTypes.string,
  winrate: PropTypes.string
};

export default RankImage;
