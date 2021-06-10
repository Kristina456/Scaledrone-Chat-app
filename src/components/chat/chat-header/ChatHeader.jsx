import React, { useContext } from "react";
import ChatContext from "../../context/ChatContext";
import "./ChatHeader.css";

export default function ChatHeader() {
  const { onClickLogout, user } = useContext(ChatContext);

  return (
    <div className="c-header__item">
      <div className="c-header__button__item">
        <button className="c-header__button" onClick={onClickLogout} type="submit">
          LogOut
        </button>
      </div>
      <div className="c-header__greetings__item">
        <div>Hello {user.username}!</div>
      </div>
    </div>
  );
}
