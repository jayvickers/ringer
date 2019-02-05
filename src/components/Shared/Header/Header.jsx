// This is a comment from Logan
import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./_header.less";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-content-container">
          <div className="header-logo-container">
            <p> Logo Here</p>
          </div>
          <div className="header-link-container">
            <p className="header-link"> About</p>
            <p className="header-link"> Contact</p>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {};

export default Header;
