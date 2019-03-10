import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./_rank-image.less";
const RankImage = props => {
  const getGridInfo = () => {
    const imageClasses = classNames({
      "rank-image": true,
      [`${props.size}`]: props.size
    });
    return (
      <div className="rank-image-container">
        <div className={imageClasses} />
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
  gridVersion: PropTypes.bool,
  rank: PropTypes.string,
  size: PropTypes.string
};

export default RankImage;
