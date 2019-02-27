import React from "react";
import PropTypes from "prop-types";
import RoleOption from "../Shared/RoleSelector/RoleOption";
import classNames from "classnames";
// import Roles from "../Shared/Types/Roles";
import "./_result-rank.less";
const ResultRank = props => {
  const getRankInfo = () => {
    const spanClasses = classNames({
      low: props.winRate <= 49,
      med: props.winRate > 49 && props.winRate <= 55,

      high: props.winRate > 55
    });
    return (
      <div className="rank-info-content-container">
        <RoleOption handleRoleChange={() => {}} option={props.role} />
        <span className={spanClasses}>{props.winRate}% winrate</span>
      </div>
    );
  };
  const getRank = () => {
    return (
      <div className="rank-content-container">
        {/* {`${props.rank} - ${props.winRate} winrate - 100 games`} */}
        <div className="rank-image-container">
          <span className="rank-label">{props.rank}</span>
          <div className="rank-image" />
        </div>
        {getRankInfo()}
      </div>
    );
  };

  return <div className="result-rank-container">{getRank()}</div>;
};

ResultRank.propTypes = {
  role: PropTypes.string,
  rank: PropTypes.string,
  winRate: PropTypes.number
};

export default ResultRank;
