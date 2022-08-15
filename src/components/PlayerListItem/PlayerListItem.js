import React, { useState } from "react";
import "./PlayerListItem.scss";
import SportTag from "../SportTag/SportTag";
import * as AiIcons from "react-icons/ai";
import io from "socket.io-client";
import Chat from "../Chat/Chat";
const socket = io.connect("http://localhost:5050");

const PlayerListItem = ({ currentUser, player }) => {
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    socket.emit("joinRoom", player.firstName);
    setShowChat(true);
  };
  return (
    <>
      <div className="player">
        <div className="player__image-container">
          <img
            src={`/${player.firstName}.jpeg`}
            alt={`${player.firstName} ${player.lastName}`}
            className="player__image"
          />
        </div>
        <div className="player__info">
          <div className="player__headlines">
            <h3 className="player__name">{`${player.firstName} ${player.lastName}`}</h3>
            <span className="player__distance">{`${player.distance}km away`}</span>
          </div>
          <div className="player__sports">
            {player.badminton ? <SportTag sport="badminton" /> : ""}
            {player.bowling ? <SportTag sport="bowling" /> : ""}
            {player.golf ? <SportTag sport="golf" /> : ""}
            {player.squash ? <SportTag sport="squash" /> : ""}
            {player.tableTennis ? <SportTag sport="table tennis" /> : ""}
            {player.tennis ? <SportTag sport="tennis" /> : ""}
          </div>
          <div className="player__bio-container">
            <p className="player__bio">{player.bio}</p>
          </div>
          <div className="player__contact-button-container">
            <button onClick={joinRoom} className="player__contact-button">
              Message
              <span className="player__contact-button-icon">
                <AiIcons.AiFillMessage />
              </span>
            </button>
            <Chat
              showChat={showChat}
              setShowChat={setShowChat}
              room={player.firstName}
              username={currentUser.firstName}
              socket={socket}
              player={player}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerListItem;
