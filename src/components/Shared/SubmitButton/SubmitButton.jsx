// This is a comment from Logan
import React from "react";
import PropTypes from "prop-types";
import "./_submit-button.less";

var SubmitButton = props => {
  return (
    <div className="submit-button-container">
      <button>{props.buttonText}</button>
    </div>
  );
};

SubmitButton.propTypes = {
  buttonText: PropTypes.string
};

export default SubmitButton;
