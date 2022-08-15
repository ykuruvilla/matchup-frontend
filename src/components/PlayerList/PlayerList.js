import axios from "axios";
import React, { useEffect, useState } from "react";
import PlayerListItem from "../PlayerListItem/PlayerListItem";
import haversine from "haversine";
import "./PlayerList.scss";

const PlayerList = ({ currentUser }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5050/users`)
      .then((response) => {
        findDistance(response.data);
      })
      .catch((err) => {
        console.log(`Error getting players: ${err}`);
      });
  }, []);

  const findDistance = (players) => {
    const playersWithDistance = [];

    if (Object.keys(currentUser).length !== 0) {
      for (const player of players) {
        const start = {
          latitude: currentUser.latitude,
          longitude: currentUser.longitude,
        };

        const end = {
          latitude: player.latitude,
          longitude: player.longitude,
        };

        const distanceOne = haversine(start, end, { unit: "meter" }) / 1000;
        const distance = Math.round(distanceOne * 10) / 10;

        const updatedPlayer = { ...player, distance: distance };

        playersWithDistance.push(updatedPlayer);
      }

      setPlayers(playersWithDistance);
    }
  };

  return (
    <div className="player__list">
      <h1 className="player__list-title">Matchups near you</h1>
      {players
        .filter((player) => player._id !== currentUser._id)
        .sort((a, b) => a.distance - b.distance)
        .map((player) => {
          return (
            <PlayerListItem
              currentUser={currentUser}
              key={player._id}
              player={player}
            />
          );
        })}
    </div>
  );
};

export default PlayerList;
