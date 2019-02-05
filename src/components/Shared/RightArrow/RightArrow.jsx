// This is a comment from Logan
import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./_right-arrow.less";

class RightArrow extends Component {
  render() {
    return (
      <div className="right-arrow">
        <ion-icon name="arrow-round-forward" />
      </div>
    );
  }
}

RightArrow.propTypes = {};

export default RightArrow;
