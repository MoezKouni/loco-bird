import React from "react";
import "../components/Login.css";
import { Typography, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  return (
    <div className="login">
      <div className="login__left">
        <IconButton
          className="login__backArrow"
          onClick={() => history.goBack()}
        >
          <ArrowBackIcon />
        </IconButton>
        <div className="login__left__brand">
          <img
            src="https://dartdoc.takyam.com/logos/dart-bird.svg"
            alt="loco bird logo"
            className="logo_login"
          />
          <Typography variant="h3" className="brand">
            loco<span>bird</span>
          </Typography>
        </div>
        <div className="login__left__paragraphe">
          <Typography variant="h2" className="login__left__slogan">
            All in one place
          </Typography>
          <Typography variant="body1">
            Many people agreed that LocoBird is the best website to talk to your
            friends, and share your best snapshots.
          </Typography>
          <Typography variant="body1">Join Now!</Typography>
        </div>
      </div>
      <div className="login__right">
        <img
          alt="register"
          src="https://afrinic.net/images/2020/08/06/AIS20-Registration-Card.png"
          className="login__img"
        />
        <Typography variant="h4" className="login__title">
          Login
        </Typography>
        <Typography variant="caption" className="login__title__info">
          Log in with your data you entered during your registration
        </Typography>
        <form>
          <div className="Input">
            <input
              type="text"
              id="input"
              className="Input-text"
              placeholder="Email Address"
              style={{ color: "black", borderColor: "#34a5e9" }}
            />
            <label htmlFor="input" className="Input-label">
              Email Address
            </label>
          </div>
          <div className="Input">
            <input
              type="text"
              id="input"
              className="Input-text"
              placeholder="Password"
              style={{ color: "black", borderColor: "#34a5e9" }}
            />
            <label htmlFor="input" className="Input-label">
              Password
            </label>
          </div>
          <button className="login__btn">Log in</button>
        </form>
        <Typography variant="subtitle1" className="create_account">
          Don't have an account? <Link to="/register">Register now!</Link>
        </Typography>
      </div>
    </div>
  );
};

export default Login;
