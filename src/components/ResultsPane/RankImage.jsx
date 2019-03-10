import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./_rank-image.less";
const RankImage = props => {
  const getImage = () => {
    const imageClasses = classNames({
      "rank-image": true,
      [`${props.size}`]: props.size
    });
    return (
      <div className="rank-image-container">
        {props.hideLabel ? null : (
          <span className="rank-label">{props.rank}</span>
        )}
        <div className={imageClasses} />
      </div>
    );
  };

  return getImage();
};

RankImage.propTypes = {
  hideLabel: PropTypes.bool,
  rank: PropTypes.string,
  size: PropTypes.string
};

export default RankImage;
