import React from "react";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";

const SportTag = ({ sport }) => {
  return (
    <div className="player__sports-tag">
      {sport === "badminton" ? (
        <GiIcons.GiShuttlecock />
      ) : sport === "bowling" ? (
        <FaIcons.FaBowlingBall />
      ) : sport === "golf" ? (
        <FaIcons.FaGolfBall />
      ) : sport === "squash" ? (
        <GiIcons.GiTennisRacket />
      ) : sport === "table tennis" ? (
        <FaIcons.FaTableTennis />
      ) : sport === "tennis" ? (
        <GiIcons.GiTennisBall />
      ) : (
        ""
      )}

      <p className="player__sports-tag-text">{sport}</p>
    </div>
  );
};

export default SportTag;
