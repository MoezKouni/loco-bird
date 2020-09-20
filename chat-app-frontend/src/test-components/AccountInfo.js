import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import { useDispatch } from "react-redux";
import { register } from "../actions/AuthActions";

const AccountInfo = ({ info, handleChange, next, confirmPwd }) => {
  const [show, setShow] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="col-md-6 col-6 update__body">
      <div className="Input" style={{ marginTop: 30 }}>
        <input
          type="text"
          id="input"
          className="Input-text"
          placeholder="Phone Number"
          style={{ color: "black" }}
          name="phone"
          value={info.phone}
          onChange={handleChange}
        />
        <label htmlFor="input" className="Input-label">
          Phone Number
        </label>
      </div>
      <div className="Input" style={{ marginTop: 30 }}>
        <input
          type="text"
          id="input"
          className="Input-text"
          placeholder="Email Address"
          style={{ color: "black" }}
          name="email"
          value={info.email}
          onChange={handleChange}
        />
        <label htmlFor="input" className="Input-label">
          Email Address
        </label>
      </div>
      <div className="Input" style={{ margin: "30px 0" }}>
        <input
          type={showPwd ? "text" : "password"}
          id="input"
          className="Input-text"
          placeholder="Password"
          style={{ color: "black" }}
          name="password"
          value={info.password}
          onChange={handleChange}
        />
        <label htmlFor="input" className="Input-label">
          Password
        </label>
        <span className="show_hide_eye">
          {showPwd ? (
            <IconButton onClick={() => setShowPwd(!showPwd)}>
              <VisibilityOutlinedIcon style={{ fontSize: 20 }} />
            </IconButton>
          ) : (
            <IconButton onClick={() => setShowPwd(!showPwd)}>
              <VisibilityOffOutlinedIcon style={{ fontSize: 20 }} />
            </IconButton>
          )}
        </span>
      </div>
      <div className="Input">
        <input
          type={show ? "text" : "password"}
          id="input"
          className="Input-text"
          placeholder="Confirm Password"
          style={{ color: "black" }}
          name="confirm_password"
          value={confirmPwd}
          onChange={handleChange}
        />
        <label htmlFor="input" className="Input-label">
          Confirm Password
        </label>
        <span className="show_hide_eye">
          {show ? (
            <IconButton onClick={() => setShow(!show)}>
              <VisibilityOutlinedIcon style={{ fontSize: 20 }} />
            </IconButton>
          ) : (
            <IconButton onClick={() => setShow(!show)}>
              <VisibilityOffOutlinedIcon style={{ fontSize: 20 }} />
            </IconButton>
          )}
        </span>
      </div>

      {info.email &&
        info.password &&
        info.phone &&
        confirmPwd === info.password && (
          <IconButton
            style={{ alignSelf: "center" }}
            onClick={() => dispatch(register(info))}
          >
            <span>Confirm </span>
            <DoneAllIcon />
          </IconButton>
        )}
    </div>
  );
};

export default AccountInfo;
