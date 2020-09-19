import React from "react";
import "../components/ChatArea.css";
import Conversations from "./Conversations";
import Chat from "./Chat";
import UserInfo from "./UserInfo";
import { useSelector } from "react-redux";

const Content = () => {
  const { gradientBgColor, textColor, secondBgColor } = useSelector(
    (state) => state.theme
  );
  return (
    <div
      className="chatarea row"
      style={{
        background: gradientBgColor,
        color: textColor,
        border: `10px solid ${secondBgColor}`,
      }}
    >
      {/* Chat List */}
      <Conversations />
      <Chat />
      {/* Chat */}
      {/* Info User */}
      <UserInfo />
    </div>
  );
};

export default Content;
