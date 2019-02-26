import React from "react";
import PropTypes from "prop-types";
import RoleOption from "../Shared/RoleSelector/RoleOption";
// import Roles from "../Shared/Types/Roles";
import "./_result-rank.less";
const ResultRank = props => {
  const getRankInfo = () => {
    return (
      <div className="rank-info-content-container">
        <RoleOption handleRoleChange={() => {}} option={props.primaryRole} />
        <span>{props.winRate} winrate</span>
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
  primaryRole: PropTypes.string,
  rank: PropTypes.string,
  secondaryRole: PropTypes.string,
  winRate: PropTypes.string
};

export default ResultRank;
