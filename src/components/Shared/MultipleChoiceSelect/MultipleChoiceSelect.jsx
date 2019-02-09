// This is a comment from Logan
import React, { Component } from "react";
import CustomRadioButton from "./CustomRadioButton";
import PropTypes from "prop-types";
import "./_multiple-choice_select.less";

class MultipleChoiceSelect extends Component {
  getRadioButton = (id, label) => {
    return <CustomRadioButton label={label} name={id} id={id} value={id} />;
  };

  getRolesPlayed = () => {
    const top = this.props.lfRoles ? "lf-top" : "top";
    const mid = this.props.lfRoles ? "lf-mid" : "mid";
    const jungle = this.props.lfRoles ? "lf-jungle" : "jungle";
    const bot = this.props.lfRoles ? "lf-bot" : "bot";
    const support = this.props.lfRoles ? "lf-support" : "support";
    return (
      <form action="#">
        <div className="segmented-control">
          {this.getRadioButton(top, "top")}
          {this.getRadioButton(jungle, "jungle")}
          {this.getRadioButton(mid, "mid")}
          {this.getRadioButton(bot, "bot")}
          {this.getRadioButton(support, "support")}
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

MultipleChoiceSelect.propTypes = {
  lfRoles: PropTypes.bool
};

export default MultipleChoiceSelect;
