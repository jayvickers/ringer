// This is a comment from Logan
import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./_arrow.less";

class Arrow extends Component {
  render() {
    return (
      <div className="arrow">
        <ion-icon name="arrow-round-up" />
      </div>
    );
  }
}

Arrow.propTypes = {};

export default Arrow;
