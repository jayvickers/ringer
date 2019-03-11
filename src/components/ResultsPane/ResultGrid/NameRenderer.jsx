import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
const NameRenderer = params => {
  const renderGridName = () => {
    const containerClasses = classNames({
      "grid-name-container": true,
      "grid-image-cell-container": true
    });
    return (
      <div className={containerClasses}>
        <span className="summoner-name">{params.data.summoner}</span>
      </div>
    );
  };

  return renderGridName();
};

NameRenderer.propTypes = {
  summoner: PropTypes.string
};

export default NameRenderer;
