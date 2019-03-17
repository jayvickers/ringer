import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import RolePaths from "../../Shared/Types/RolePaths";
import "./_role-option.less";
const RoleOption = props => {
  const winrate = props.winrate;
  const spanClasses = classNames({
    low: winrate <= 49,
    med: winrate > 49 && winrate <= 55,
    high: winrate > 55
  });

  const getStandardVersion = () => {
    const containerClasses = classNames({
      "role-option-container": true,
      placeholder: props.placeHolder,
      disabled: props.isDisabled,
      "has-hover": props.hasHover,
      "is-selected": props.currentlySelected
    });

    const optionClasses = classNames({
      [`role-option ${props.option}`]: true,
      current: props.currentlySelected
    });

    return (
      <div
        onClick={e => props.handleRoleChange(e, props.option)}
        className={containerClasses}
      >
        <span className="role-label">
          {props.currentlySelected ? "Selected" : props.option}
        </span>
        <div
          id={props.currentlySelected ? "current" : props.option}
          className={optionClasses}
        />
        {props.winrate >= 0 && (
          <span className={spanClasses}>{props.winrate}% winrate</span>
        )}
        {props.gamesPlayed && (
          <span className="role-games">{props.gamesPlayed} games</span>
        )}
      </div>
    );
  };
  const getRolePath = () => {
    if (!props.option) {
      return RolePaths.mid;
    }

    const curRole = props.option.toLowerCase().replace(/\s+/g, "");

    if (curRole.includes("top")) {
      return RolePaths.top;
    } else if (curRole.includes("jungle")) {
      return RolePaths.jungle;
    } else if (curRole.includes("mid")) {
      return RolePaths.mid;
    } else if (curRole.includes("bot")) {
      return RolePaths.bot;
    } else if (curRole.includes("sup")) {
      return RolePaths.support;
    }
  };

  const getGridVersion = () => {
    const containerClasses = classNames({
      "grid-role-container": true
    });

    const imgPath = getRolePath();

    const imgClasses = classNames({
      "grid-role": true,
      "grid-image": true
    });

    return (
      <div className={containerClasses}>
        <img className={imgClasses} alt="role" src={props.imgSrc + imgPath} />
        <div className="role-info-container">
          <span className="role-label-grid">{props.option}</span>
          <span className={spanClasses}>{props.winrate}% winrate</span>
          <span className="role-games">{props.gamesPlayed} games</span>
        </div>
      </div>
    );
  };
  return props.gridVersion ? getGridVersion() : getStandardVersion();
};

RoleOption.propTypes = {
  currentlySelected: PropTypes.bool,
  gamesPlayed: PropTypes.string,
  gridVersion: PropTypes.bool,
  hasHover: PropTypes.bool,
  imgSrc: PropTypes.string,
  isDisabled: PropTypes.bool,
  option: PropTypes.string,
  handleRoleChange: PropTypes.func,
  placeHolder: PropTypes.bool,
  winrate: PropTypes.string
};

export default RoleOption;
