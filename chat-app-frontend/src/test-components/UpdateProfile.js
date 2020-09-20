import React, { useState } from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useSelector } from "react-redux";
import { Typography, Divider } from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import "../components/UpdateProfile.css";

export const govs = [
  "Ariana",
  "Béja",
  "Ben Arous",
  "Bizerte",
  "Gabès",
  "Gafsa",
  "Jendouba",
  "Kairouan",
  "Kasserine",
  "Kébili",
  "Le Kef",
  "Mahdia",
  "La Manouba",
  "Médinin",
  "Monastir",
  "Nabeul",
  "Sfax",
  "Sidi Bouzid",
  "Siliana",
  "Sousse",
  "Tataouine",
  "Tozeur",
  "Tunis",
  "Zaghouan",
];

const UpdateProfile = ({ option }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [editClicked, setEditClicked] = useState(false);

  const theme = useSelector((state) => state.theme);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="update">
        <div className="row">
          <div className="col-12 update__header">
            <div className="update__header__img">
              <img
                src="https://joyonlineschool.com/static/emptyuserphoto.png"
                alt="avatar"
                className="update__img__avatar"
              />
              <label
                className="import__img_btn"
                style={{ background: theme.buttonBg }}
              >
                Import
                <input type="file" style={{ display: "none" }} />
              </label>
            </div>
            <div
              className="update__header__name"
              onMouseOver={() => setShowEdit(true)}
              onMouseLeave={() => setShowEdit(false)}
            >
              {showEdit && (
                <EditOutlinedIcon
                  className="update__editName__btn"
                  onClick={() => setEditClicked(!editClicked)}
                />
              )}
              {editClicked ? (
                <div className="update__name__inputs">
                  <input type="text" value="Moez" />
                  <input type="text" value="El Kouni" />
                </div>
              ) : (
                <div>
                  <Typography variant="h3">Moez</Typography>
                  <Typography variant="h3">El Kouni</Typography>
                </div>
              )}
            </div>
          </div>
        </div>
        <Divider />
        <div className="row update__form">
          <div className="col-md-6 col-6 update__body">
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div
                className="Input"
                style={{ flexBasis: "65%", marginRight: 10 }}
              >
                <input
                  type="text"
                  id="input"
                  className="Input-text"
                  placeholder="Email Address"
                  style={{ color: "black" }}
                />
                <label
                  htmlFor="input"
                  className="Input-label"
                  style={{ color: theme.name === "dark" && "white" }}
                >
                  Email Address
                </label>
              </div>
              <div className="Input" style={{ flexBasis: "30%" }}>
                <input
                  type="text"
                  id="input"
                  className="Input-text"
                  placeholder="Phone Number"
                  style={{ color: "black" }}
                />
                <label
                  htmlFor="input"
                  className="Input-label"
                  style={{ color: theme.name === "dark" && "white" }}
                >
                  Phone Number
                </label>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", marginTop: 30 }}>
              <div
                className="Input"
                style={{ flexBasis: "65%", marginRight: 10 }}
              >
                <input
                  type="text"
                  id="input"
                  className="Input-text"
                  placeholder="Address"
                  style={{ color: "black" }}
                />
                <label
                  htmlFor="input"
                  className="Input-label"
                  style={{ color: theme.name === "dark" && "white" }}
                >
                  Address
                </label>
              </div>
              <div className="Input" style={{ flexBasis: "30%" }}>
                <input
                  type="text"
                  id="input"
                  className="Input-text"
                  placeholder="City"
                  style={{ color: "black" }}
                />
                <label
                  htmlFor="input"
                  className="Input-label"
                  style={{ color: theme.name === "dark" && "white" }}
                >
                  City
                </label>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: 30,
                alignItems: "center",
              }}
            >
              <div className="select-container">
                <select>
                  <option value="none">None</option>
                  {govs.map((el, i) => (
                    <option key={i} value={el}>
                      {el}
                    </option>
                  ))}
                </select>
              </div>

              <div className="Input" style={{ flexBasis: "30%" }}>
                <input
                  type="date"
                  className="date_of_birth_input Input-text"
                  id="dob"
                  style={{ color: "black" }}
                />
                <label
                  htmlFor="dob"
                  className="Input-label"
                  style={{
                    top: "20%",
                    bottom: "100%",
                    color: theme.name === "dark" && "white",
                  }}
                >
                  Date of birth
                </label>
              </div>
            </div>
            <div className="Input" style={{ flexBasis: "30%" }}>
              <textarea
                name="bio"
                rows="5"
                id="bio"
                className="bio_textarea Input-text"
                placeholder="Bio"
                style={{ color: "black" }}
              ></textarea>
              <label
                htmlFor="bio"
                className="Input-label"
                style={{
                  top: "20%",
                  bottom: "100%",
                  color: theme.name === "dark" && "white",
                }}
              >
                Bio
              </label>
            </div>
            <button
              className="import__img_btn save_btn"
              style={{ background: theme.buttonBg }}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </MuiPickersUtilsProvider>
  );
};
UpdateProfile.defaultProps = {
  option: {
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png",
  },
};
export default UpdateProfile;
