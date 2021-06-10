import React, { useContext, useState } from "react";
import ChatContext from "../../context/ChatContext";
import "./ChatSendMessage.css";

export default function ChatSendMessage() {
  const { publishMessage } = useContext(ChatContext);

  const [message, setMessage] = useState("");

  function sendMessage(e) {
    e.preventDefault();
    if (message && message.replace(/\s/g, "").length > 0) {
      publishMessage(message);
      setMessage("");
    }
  }

  return (
    <div className="c-send-message__item">
      <div className="c-send-message__message">Message: </div>
      <div className="c-send-message__form">
        <form className="message-form__item" onSubmit={sendMessage}>
          <input
            className="message-form__input"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button className="message-form__button">Send</button>
        </form>
      </div>
    </div>
  );
}
