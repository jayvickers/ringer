import React from "react";
import PropTypes from "prop-types";
import RoleOption from "../Shared/RoleSelector/RoleOption";
import classNames from "classnames";
// import Roles from "../Shared/Types/Roles";
import "./_result-rank.less";
const ResultRank = props => {
  const getRankInfo = (role, winrate) => {
    const spanClasses = classNames({
      low: winrate <= 49,
      med: winrate > 49 && winrate <= 55,
      high: winrate > 55
    });
    return (
      <div className="rank-info-content-container">
        <RoleOption handleRoleChange={() => {}} option={role} />
        <span className={spanClasses}>{winrate}% winrate</span>
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
        <div className="rank-info-row">
          {getRankInfo(props.primaryRole, props.primaryWinRate)}
          {getRankInfo(props.secondaryRole, props.secondaryWinRate)}
        </div>
      </div>
    );
  };

  return <div className="result-rank-container">{getRank()}</div>;
};

ResultRank.propTypes = {
  primaryRole: PropTypes.string,
  primaryWinRate: PropTypes.number,
  rank: PropTypes.string,
  secondaryRole: PropTypes.string,
  secondaryWinRate: PropTypes.number
};

export default ResultRank;
