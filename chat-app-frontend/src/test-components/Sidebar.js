import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import NotesIcon from "@material-ui/icons/Notes";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { Avatar, IconButton } from "@material-ui/core";
import { useLocation, Link } from "react-router-dom";
import "../components/Sidebar.css";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../actions/ThemeActions";

const Sidebar = ({ children }) => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const location = useLocation();
  // #F2A5C4  pink
  // #34A5E9 blue
  const specialColors = () => {
    if (theme.themeColor === "blue") {
      return "#34A5E9";
    } else if (theme.themeColor === "pink") {
      return "#F2A5C4";
    } else if (theme.themeColor === "yellow") {
      return "#ffcc00";
    } else {
      return theme.themeColor;
    }
  };

  const filterImage = () => {
    switch (theme.themeColor) {
      case "red":
        return "invert(1)";
      case "purple":
        return "hue-rotate(75deg)";
      case "pink":
        return "hue-rotate(125deg)";
      case "orange":
        return "hue-rotate(175deg)";
      case "yellow":
        return "hue-rotate(240deg)";
      case "green":
        return "hue-rotate(280deg)";
      default:
        return "hue-rotate(0deg)";
    }
  };
  return (
    <div className="sidebar" style={{ background: theme.secondBgColor }}>
      <div className="sidebar__menu">
        <img
          src="https://dartdoc.takyam.com/logos/dart-bird.svg"
          alt="logo"
          className="sidebar__logo"
          style={{ filter: filterImage() }}
        />
        <div className="sidebar__main__menu">
          <IconButton>
            <NotesIcon
              style={{
                fill: location.pathname === "/notes" && specialColors(),
                color: theme.iconColors,
              }}
            />
          </IconButton>
          <IconButton>
            <InsertInvitationIcon
              style={{
                fill: location.pathname === "/invitation" && specialColors(),
                color: theme.iconColors,
              }}
            />
          </IconButton>
          <Link to="/home">
            <IconButton>
              <ChatBubbleIcon
                style={{
                  fill:
                    location.pathname === "/" &&
                    (theme.themeColor === "blue"
                      ? "#34A5E9"
                      : theme.themeColor),
                  color: theme.iconColors,
                }}
              />
            </IconButton>
          </Link>
          <IconButton>
            <PhotoLibraryIcon
              style={{
                fill: location.pathname === "/photos" && specialColors(),
                color: theme.iconColors,
              }}
            />
          </IconButton>
          <IconButton>
            <NotificationsIcon
              style={{
                fill: location.pathname === "/notifications" && specialColors(),
                color: theme.iconColors,
              }}
            />
          </IconButton>
          {theme.pinToggle && (
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                className="checkbox"
                id="chk"
                checked={theme.name === "dark" ? true : false}
                onChange={(e) =>
                  e.target.checked
                    ? dispatch(changeTheme("dark"))
                    : dispatch(changeTheme("light"))
                }
              />
              <label className="label" htmlFor="chk">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <div className="ball"></div>
              </label>
            </div>
          )}
        </div>
        <div className="sidebar__footer">
          <Link to="/settings">
            <IconButton>
              <SettingsIcon
                style={{
                  fill:
                    location.pathname === "/settings" &&
                    (theme.themeColor === "blue"
                      ? "#34A5E9"
                      : theme.themeColor),
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
