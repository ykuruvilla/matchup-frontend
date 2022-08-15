import React, { useEffect, useState } from "react";
import * as AiIcons from "react-icons/ai";
import "./Chat.scss";

const Chat = ({ socket, room, username, showChat, setShowChat, player }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: `${new Date(Date.now()).getHours()}:${new Date(
          Date.now()
        ).getMinutes()}`,
      };

      await socket.emit("sendMessage", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  const closeChat = () => {
    setShowChat(false);
  };

  return (
    <div
      className={
        showChat ? "chat__window chat__window--active" : "chat__window"
      }
    >
      <div className="chat__header">
        <div className="chat__close-button-container">
          <button className="chat__close-button" onClick={closeChat}>
            <AiIcons.AiOutlineCaretLeft />
          </button>
        </div>
        <p className="chat__header-text">{`${player.firstName} ${player.lastName}`}</p>
        <div className="chat__header-right"></div>
      </div>
      <div className="chat__body">
        {messageList.map((messageContent, index) => {
          return (
            <div
              className="chat__message-wrapper"
              id={username === messageContent.author ? "you" : "other"}
            >
              <div className="chat__message">
                <div className="chat__message-content">
                  <p className="chat__message-content-text">
                    {messageContent.message}
                  </p>
                </div>
                <div className="chat__message-meta">
                  <p className="chat__message-meta-time">
                    {messageContent.time}
                  </p>
                  <p className="chat__message-meta-author">
                    {messageContent.author}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="chat__footer">
        <input
          value={currentMessage}
          className="chat__input"
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
          onKeyUp={(e) => {
            e.key === "Enter" && sendMessage();
          }}
          type="text"
          placeholder="Write your message..."
        />
        <button className="chat__send-button" onClick={sendMessage}>
          <AiIcons.AiOutlineCaretRight />
        </button>
      </div>
    </div>
  );
};

export default Chat;
