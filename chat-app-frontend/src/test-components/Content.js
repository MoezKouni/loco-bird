import React, { useEffect } from "react";
import "../components/ChatArea.css";
import Conversations from "./Conversations";
import Chat from "./Chat";
import UserInfo from "./UserInfo";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "../actions/AuthActions";

const Content = () => {
  const { gradientBgColor, textColor, secondBgColor } = useSelector(
    (state) => state.theme
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
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
