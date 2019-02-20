import React from "react";
import PropTypes from "prop-types";
import "./_text-input.less";

const getSummonerNameInputBox = props => {
  const { id, name, label, maxlength, placeholder } = props;
  return (
    <div className="ringer-input-container">
      <div className="text-input-container">
        <div className="field">
          <input
            type="text"
            maxLength={maxlength}
            name={name}
            id={id}
            placeholder={placeholder}
            required
          />
          <label htmlFor={id}>{label}</label>
        </div>
      </div>
    </div>
  );
};

const TextInput = props => getSummonerNameInputBox(props);

TextInput.propTypes = {
  id: PropTypes.string,
  maxlength: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string
};

export default TextInput;
