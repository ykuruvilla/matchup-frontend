import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PlayerDetails = (props) => {
  const location = useLocation();
  const player = location.playerProps;
  console.log(player);

  const deletePlayer = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5050/users/${player._id}`)
      .then((response) => (window.location.href = response.data.redirect))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>{`${player.firstName} ${player.lastName}`}</h1>
      <h2>{player.distance}</h2>
      <h3>{player.bio}</h3>
      <button onClick={deletePlayer}>DELETE</button>
    </div>
  );
};

export default PlayerDetails;
