import React, { useState } from "react";
import "../components/Settings.css";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import SettingsContent from "./SettingsContent";

const Settings = () => {
  const [option, setOption] = useState("Update Profile");

  const handleOption = (text) => {
    setOption(text);
  };

  const theme = useSelector((state) => state.theme);

  return (
    <div
      className="settings row"
      style={{
        background: theme.gradientBgColor,
        color: theme.textColor,
        border: `10px solid ${theme.secondBgColor}`,
      }}
    >
      <div className="settings__leftSide">
        <h1>Settings</h1>
        <div className="settings__leftSide__list">
          <div
            style={{
              background:
                option === "Update Profile" && "rgba(128, 128, 128, 0.178)",
              borderRadius: option === "Update Profile" && "10px 0px 0px 10px",
              transform: option === "Update Profile" && "scale(1.1)",
            }}
            className="settings__leftSide__list__item"
            onClick={() => handleOption("Update Profile")}
          >
            <Typography>Update Profile</Typography>
          </div>
          <div
            className="settings__leftSide__list__item"
            style={{
              background:
                option === "Appearance" && "rgba(128, 128, 128, 0.178)",
              borderRadius: option === "Appearance" && "10px 0px 0px 10px",
              transform: option === "Appearance" && "scale(1.1)",
            }}
            onClick={() => handleOption("Appearance")}
          >
            <Typography>Appearance</Typography>
          </div>
          <div
            className="settings__leftSide__list__item"
            style={{
              background:
                option === "Change Password" && "rgba(128, 128, 128, 0.178)",
              borderRadius: option === "Change Password" && "10px 0px 0px 10px",
              transform: option === "Change Password" && "scale(1.1)",
            }}
            onClick={() => handleOption("Change Password")}
          >
            <Typography>Change Password</Typography>
          </div>
        </div>
      </div>
      <div className="settings__rightSide">
        <h1>{option}</h1>
        <SettingsContent option={option} />
      </div>
    </div>
  );
};

export default Settings;
