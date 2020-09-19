import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import NotesIcon from "@material-ui/icons/Notes";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { Avatar, IconButton } from "@material-ui/core";
import { useLocation, Link } from "react-router-dom";
import "../components/Sidebar.css";
import { useSelector } from "react-redux";

const Sidebar = ({ children }) => {
  const theme = useSelector((state) => state.theme);

  const location = useLocation();
  return (
    <div className="sidebar" style={{ background: theme.secondBgColor }}>
      <div className="sidebar__menu">
        <img
          src="https://dartdoc.takyam.com/logos/dart-bird.svg"
          alt="logo"
          className="sidebar__logo"
        />
        <div className="sidebar__main__menu">
          <IconButton>
            <NotesIcon
              style={{
                fill: location.pathname === "/notes" && "#64DFCB",
                color: theme.iconColors,
              }}
            />
          </IconButton>
          <IconButton>
            <InsertInvitationIcon
              style={{
                fill: location.pathname === "/invitation" && "#64DFCB",
                color: theme.iconColors,
              }}
            />
          </IconButton>
          <Link to="/">
            <IconButton>
              <ChatBubbleIcon
                style={{
                  fill: location.pathname === "/" && "#64DFCB",
                  color: theme.iconColors,
                }}
              />
            </IconButton>
          </Link>
          <IconButton>
            <NotificationsIcon
              style={{
                fill: location.pathname === "/notifications" && "#64DFCB",
                color: theme.iconColors,
              }}
            />
          </IconButton>
        </div>
        <div className="sidebar__footer">
          <Link to="/settings">
            <IconButton>
              <SettingsIcon
                style={{
                  fill: location.pathname === "/settings" && "#64DFCB",
                  color: theme.iconColors,
                }}
              />
            </IconButton>
          </Link>
          <IconButton>
            <GroupAddIcon style={{ color: theme.iconColors }} />
          </IconButton>
          <IconButton>
            <Avatar style={{ color: theme.iconColors }} />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__content">{children}</div>
    </div>
  );
};

export default Sidebar;
