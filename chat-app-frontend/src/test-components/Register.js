import React, { useState } from "react";
import "../components/Register.css";
import { IconButton, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FastForwardIcon from "@material-ui/icons/FastForward";
import PersonalInfo from "./PersonalInfo";
import AccountInfo from "./AccountInfo";

const Register = ({ history }) => {
  const [info, setInfo] = useState({
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    gov: "",
    gender: "",
    date_of_birth: "",
    email: "",
    phone: "",
    password: "",
  });
  const [confirmPwd, setConfirmPwd] = useState("");
  const [step, setStep] = useState("personal");

  const handleChange = (e) => {
    if (e.target.name === "confirm_password") {
      setConfirmPwd(e.target.value);
    } else {
      setInfo({ ...info, [e.target.name]: e.target.value });
    }

    if (
      step === "account" &&
      info.first_name &&
      info.last_name &&
      info.address &&
      info.city &&
      info.gov &&
      info.gender &&
      info.date_of_birth &&
      info.email &&
      info.phone &&
      info.password &&
      info.password === confirmPwd
    ) {
      setStep("finish");
    }
  };
  const next = () => {
    setStep("account");
  };

  return (
    <div className="register">
      <div className="login__left register__left">
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
        <div className="register__left__stepper">
          <div className="register__step__information">
            <Typography
              variant="subtitle1"
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                fontWeight: 700,
                opacity: step === "personal" ? 1 : 0.5,
                cursor: "pointer",
              }}
              onClick={() => setStep("personal")}
            >
              {step === "personal" && <FastForwardIcon />}
              Personal information
            </Typography>
          </div>
          <div className="register__step__information">
            <Typography
              variant="subtitle1"
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                fontWeight: 700,
                opacity: step === "account" ? 1 : 0.5,
                cursor: "pointer",
              }}
              onClick={() => {
                if (
                  info.first_name &&
                  info.last_name &&
                  info.address &&
                  info.city &&
                  info.gov &&
                  info.gender &&
                  info.date_of_birth
                ) {
                  setStep("account");
                }
              }}
            >
              {step === "account" && <FastForwardIcon />}
              Account information
            </Typography>
          </div>
          <div className="register__step__information">
            <Typography
              variant="subtitle1"
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                fontWeight: 700,
                opacity: step === "finish" ? 1 : 0.5,
              }}
            >
              {step === "finish" && <FastForwardIcon />}
              Finish
            </Typography>
          </div>
        </div>
      </div>
      <div className="login__right">
        <img
          src="https://production-eduvanz.s3.ap-south-1.amazonaws.com/website/website1.0/images/sign-up.png"
          className="login__img register__img"
          alt="register"
        />
        {step === "personal" ? (
          <PersonalInfo info={info} handleChange={handleChange} next={next} />
        ) : (
          <AccountInfo
            info={info}
            handleChange={handleChange}
            next={next}
            confirmPwd={confirmPwd}
          />
        )}
      </div>
    </div>
  );
};

export default Register;
