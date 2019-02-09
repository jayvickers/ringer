// This is a comment from Logan
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./_custom-radio-button.less";

class CustomRadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
  }

  handleClick = e => {
    e.preventDefault();
    const { id } = this.props;
    const isChecked = document.getElementById(id).checked;
    if (isChecked) {
      document.getElementById(id).checked = false;
    } else {
      document.getElementById(id).checked = true;
    }
  };

  getButton = () => {
    const { id, label, name, value } = this.props;
    return (
      <div className="button-container" onClick={e => this.handleClick(e)}>
        <input type="radio" name={name} id={id} value={value} />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  };

  render() {
    return this.getButton();
  }
}

CustomRadioButton.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
};

export default CustomRadioButton;
