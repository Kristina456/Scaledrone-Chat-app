import React, { useContext } from "react";
import ChatContext from "../../context/ChatContext";
import "./ChatMemberList.css";

export default function ChatMemberList() {
  const { membersArray } = useContext(ChatContext);

  return (
    <div className="c-member-list__item">
      <div>Members:</div>
      {membersArray.map((member) => (
        <div className="c-member-list__member__item" key={member.id}>
          <span className="c-member-list__member__avatar">
            {member.clientData.avatar}
          </span>
          <span className="c-member-list__member__username">
            {member.clientData.username}
          </span>
        </div>
      ))}
    </div>
  );
}
