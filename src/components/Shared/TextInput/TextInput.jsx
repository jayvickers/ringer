import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./_text-input.less";

const getSummonerNameInputBox = props => {
  const { id, name, label, maxlength, placeholder } = props;
  const inputClasses = classNames({
    "ringer-input-container": true,
    "text-input": true
  });
  return (
    <div className={inputClasses}>
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
