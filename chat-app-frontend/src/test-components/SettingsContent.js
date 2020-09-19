import React from "react";
import UpdateProfile from "./UpdateProfile";
import Appearance from "./Appearance";
import ChangePwd from "./ChangePwd";

const SettingsContent = ({ option }) => {
  if (option === "Update Profile") {
    return <UpdateProfile option={option} />;
  } else if (option === "Appearance") {
    return <Appearance />;
  } else {
    return <ChangePwd />;
  }
};

export default SettingsContent;
