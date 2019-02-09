// This is a comment from Logan
import React, { Component } from "react";
import CustomRadioButton from "./CustomRadioButton";
// import PropTypes from "prop-types";
import "./_multiple-choice_select.less";

class MultipleChoiceSelect extends Component {
  getRolesPlayed = () => {
    return (
      <form action="#">
        <div className="segmented-control">
          <CustomRadioButton name="top" id="top" value="top" />
          <CustomRadioButton name="jungle" id="jungle" value="jungle" />
          <CustomRadioButton name="mid" id="mid" value="mid" />
          <CustomRadioButton name="bot" id="bot" value="bot" />
          <CustomRadioButton name="support" id="support" value="support" />
        </div>
      </form>
    );
  };

  render() {
    return (
      <div className="ringer-input-container">
        <h4> Select your role(s) </h4>
        {this.getRolesPlayed()}
      </div>
    );
  }
}

MultipleChoiceSelect.propTypes = {};

export default MultipleChoiceSelect;
