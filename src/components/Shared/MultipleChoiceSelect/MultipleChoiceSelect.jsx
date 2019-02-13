// This is a comment from Logan
import React, { Component } from "react";
import CustomRadioButton from "./CustomRadioButton";
import PropTypes from "prop-types";
import "./_multiple-choice_select.less";

class MultipleChoiceSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: true };
  }

  handleClick = e => {
    e.preventDefault();
    // this.setState({
    //   isExpanded: !this.state.isExpanded
    // });
  };

  getRadioButton = (id, label) => {
    return <CustomRadioButton label={label} name={id} id={id} value={id} />;
  };

  getRolesPlayed = () => {
    const { lfRoles } = this.props;

    const top = lfRoles ? "lf-top" : "top";
    const mid = lfRoles ? "lf-mid" : "mid";
    const jungle = lfRoles ? "lf-jungle" : "jungle";
    const bot = lfRoles ? "lf-bot" : "bot";
    const support = lfRoles ? "lf-support" : "support";
    const containerClasses = `segmented-control ${
      this.state.isExpanded ? "expanded" : ""
    } ${lfRoles ? "lf-roles" : ""}`;

    return (
      <div className={containerClasses}>
        {this.getRadioButton(top, "top")}
        {this.getRadioButton(jungle, "jungle")}
        {this.getRadioButton(mid, "mid")}
        {this.getRadioButton(bot, "bot")}
        {this.getRadioButton(support, "support")}
      </div>
    );
  };

  render() {
    const { lfRoles } = this.props;
    const duoText = this.state.isExpanded
      ? "Select desired duo role(s)"
      : "Select desired duo role(s) - click to expand options";
    const headerText = !!lfRoles ? duoText : "Select your role(s)";
    return (
      <div className="ringer-input-container">
        <h4
          className={lfRoles && "has-sub-header"}
          onClick={e => this.handleClick(e)}
        >
          {headerText}
        </h4>
        {lfRoles && <h5> *Searching for all roles by default</h5>}
        {this.getRolesPlayed()}
      </div>
    );
  }
}

MultipleChoiceSelect.propTypes = {
  lfRoles: PropTypes.bool
};

export default MultipleChoiceSelect;
