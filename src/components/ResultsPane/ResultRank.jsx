import React from "react";
import PropTypes from "prop-types";
import RoleOption from "../Shared/RoleSelector/RoleOption";
import classNames from "classnames";
import Rankimage from "./RankImage";
// import Roles from "../Shared/Types/Roles";
import "./_result-rank.less";
const ResultRank = props => {
  const getRankInfo = (gamesPlayed, role, winrate) => {
    const spanClasses = classNames({
      low: winrate <= 49,
      med: winrate > 49 && winrate <= 55,
      high: winrate > 55
    });
    return (
      <div className="rank-info-content-container">
        <RoleOption
          gamesPlayed={gamesPlayed}
          handleRoleChange={() => {}}
          option={role}
          winrate={winrate}
        />
      </div>
    );
  };
  const getRank = () => {
    return (
      <div className="rank-content-container">
        <Rankimage
          imgSrc={"images/emblems/"}
          rank={props.rank}
          size={"large"}
        />

        <div className="rank-info-row">
          {getRankInfo(
            props.primaryGames,
            props.primaryRole,
            props.primaryWinRate
          )}
          {getRankInfo(
            props.secondaryGames,
            props.secondaryRole,
            props.secondaryWinRate
          )}
        </div>
      </div>
    );
  };

  return <div className="result-rank-container">{getRank()}</div>;
};

ResultRank.propTypes = {
  primaryGames: PropTypes.number,
  primaryRole: PropTypes.string,
  primaryWinRate: PropTypes.number,
  rank: PropTypes.string,
  secondaryGames: PropTypes.number,
  secondaryRole: PropTypes.string,
  secondaryWinRate: PropTypes.number
};

export default ResultRank;
