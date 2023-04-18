import React from "react";
import { FaUserPlus, FaVideo, FaEllipsisH } from "react-icons/fa";
import "../styles/chat.css";
import Messages from "./Messages";
import Input from './Input';

export default function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Punit Sharma</span>
        <div className="chatInfo-icons">
          <FaVideo size={22} style={{ cursor: "pointer" }} />
          <FaUserPlus size={22} style={{ cursor: "pointer" }} />
          <FaEllipsisH size={22} style={{ cursor: "pointer" }} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}
