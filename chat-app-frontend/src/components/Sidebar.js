import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import NotesIcon from "@material-ui/icons/Notes";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { Avatar, IconButton } from "@material-ui/core";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        src="https://www.freepnglogos.com/uploads/facebook-messenger-png/facebook-chat-logo-png-transparent-svg-vector-8.png"
        alt="logo"
        className="sidebar__logo"
      />
      <div className="sidebar__menu">
        <IconButton>
          <NotesIcon />
        </IconButton>
        <IconButton>
          <InsertInvitationIcon />
        </IconButton>
        <IconButton>
          <ChatBubbleIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
      </div>
      <div className="sidebar__footer">
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <GroupAddIcon />
        </IconButton>
        <IconButton>
          <Avatar />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
