import React, { useContext, useEffect, useRef } from "react";
import ChatContext from "../../context/ChatContext";
import UserContext from "../../context/UserContext";
import "./ChatMessageList.css";

export default function ChatMessageList() {
  const { messageArray } = useContext(ChatContext);
  const { user } = useContext(UserContext);
  const bottomRef = useRef();

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }, [messageArray]);

  function getWrapperClass(message) {
    return `c-message__item ${
      user.id === message.user.id ? "my-item" : "others-item"
    }`;
  }

  function getUsernameClass(message) {
    return `c-message__message__username ${
      user.id === message.user.id ? "my-username" : "others-username"
    }`;
  }

  function getMessageClass(message) {
    return `c-message__message__text ${
      user.id === message.user.id ? "my-message" : "others-message"
    }`;
  }

  return (
    <div className="c-messages">
      {messageArray.map((msg) => {
        if (msg.type === "MEMBER_JOINED") {
          return (
            <div
              className="c-message__item c-message__joined-left"
              key={msg.id}
            >
              <div className="c-message--joined">
                {msg.user.username} {msg.message}
              </div>
            </div>
          );
        } else if (msg.type === "MEMBER_LEFT") {
          return (
            <div
              className="c-message__item c-message__joined-left"
              key={msg.id}
            >
              <div className="c-message--left">
                {msg.user.username} {msg.message}
              </div>
            </div>
          );
        } else {
          return (
            <div className={getWrapperClass(msg)} key={msg.id}>
              <div className="c-message__avatar">{msg.user.avatar}</div>

              <div className="c-message__message-item">
                <div className={getUsernameClass(msg)}>
                  <div>{msg.user.username}</div>
                </div>
                <div className={getMessageClass(msg)}>{msg.message}</div>
              </div>
            </div>
          );
        }
      })}
      <div className="bottomContainerElement" ref={bottomRef}></div>
    </div>
  );
}
