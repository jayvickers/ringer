import React, { Component } from "react";
import PropTypes from "prop-types";
import "./_custom-radio-button.less";

class CustomRadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isPrimary: false };
    this.mouseStatus = "up";
    this.mouseTimeout = null;
  }
  holdRole = e => {
    e.preventDefault();
    clearTimeout(this.mouseTimeout);
    this.mouseStatus = "down";
    this.mouseTimeout = setTimeout(() => {
      this.mouseStatus = "longDown";
      this.setState({ isPrimary: true });
      console.log("holdin");
    }, 500);
    // setTimeout(() => {
    //   this.setState({ isPrimary: true });
    //   console.log("holding");
    // }, 500);
  };

  holdRole2 = e => {
    e.preventDefault();
    clearTimeout(this.mouseTimeout);
    this.mouseStatus = "up";
  };

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
    const containerClasses = `button-container ${
      this.state.isPrimary ? "primary-role" : ""
    }`;

    return (
      <div
        className={containerClasses}
        id={`container-${id}`}
        onMouseDown={e => this.holdRole(e)}
        onMouseUp={e => this.holdRole2(e)}
      >
        <input type="radio" name={name} id={id} value={value} />
        <label
          className={this.state.isPrimary ? "primary-role" : ""}
          htmlFor={id}
        >
          {label}
        </label>
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
