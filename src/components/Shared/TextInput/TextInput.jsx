import React from "react";
import PropTypes from "prop-types";
import "./_text-input.less";

const getSummonerNameInputBox = props => {
  const { id, name, label, placeholder } = props;
  return (
    <div className="ringer-input-container">
      <div className="text-input-container">
        <form action="">
          <div className="field">
            <input type="text" name={name} id={id} placeholder={placeholder} />
            <label htmlFor={id}>{label}</label>
          </div>
        </form>
      </div>
    </div>
  );
};

const TextInput = props => getSummonerNameInputBox(props);

TextInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string
};

export default TextInput;
