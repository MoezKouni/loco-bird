import React, { useState, useEffect } from "react";
import { changeTheme, pinToggler, changeColor } from "../actions/ThemeActions";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  FormControlLabel,
  Checkbox,
  Container,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import "../components/Appearance.css";

const Appearance = () => {
  const theme = useSelector((state) => state.theme);
  const [selectedValue, setSelectedValue] = useState(theme.name);
  useEffect(() => {
    setSelectedValue(theme.name);
  }, [theme]);

  const dispatch = useDispatch();

  const handleColor = (e) => {
    dispatch(changeColor(e.target.className));
  };

  return (
    <Container>
      <div className="appearance">
        <div className="appearance__header">
          <Typography variant="h4">Select Mode</Typography>
          <div className="appearance__header__body">
            <div className="appearance__header__left">
              <img
                src="https://static.thenounproject.com/png/1664849-200.png"
                alt="dark"
                width="80px"
                onClick={() => dispatch(changeTheme("dark"))}
                style={{
                  filter: theme.name === "dark" ? "invert(1)" : "invert(0)",
                }}
              />
              <Typography variant="h5">Dark</Typography>
              <Radio
                color={selectedValue === "dark" ? "secondary" : "default"}
                checked={selectedValue === "dark"}
                onChange={() => dispatch(changeTheme("dark"))}
                value="dark"
                name="radio-button-demo"
                inputProps={{ "aria-label": "C" }}
              />
            </div>
            <div className="appearance__header__right">
              <img
                src="https://www.iconfinder.com/data/icons/meteocons/512/sun-symbol-512.png"
                alt="light"
                width="80px"
                onClick={() => dispatch(changeTheme("light"))}
                style={{
                  filter: theme.name === "dark" ? "invert(1)" : "invert(0)",
                }}
              />
              <Typography variant="h5">Light</Typography>
              <Radio
                checked={selectedValue === "light"}
                onChange={() => dispatch(changeTheme("light"))}
                value="light"
                color={selectedValue === "dark" ? "secondary" : "default"}
                name="radio-button-demo"
                inputProps={{ "aria-label": "C" }}
              />
            </div>
          </div>
        </div>
        <div className="appearance__body">
          <FormControlLabel
            control={
              <Checkbox
                checked={theme.pinToggle}
                onChange={() => dispatch(pinToggler())}
                name="jason"
                color="secondary"
                style={{ marginLeft: "auto" }}
              />
            }
            label="Want to switch theme from the menu?"
          />
          <div className="appearance__default_conversation_color">
            <Typography variant="h4">Select your favorite color</Typography>
            <Typography variant="caption">
              The color selected will be applied to the active icons and will be
              the default color for every conversation.
            </Typography>
            <div className="appearance__colors">
              <div className="blue" onClick={handleColor}></div>
              <div className="red" onClick={handleColor}></div>
              <div className="yellow" onClick={handleColor}></div>
              <div className="green" onClick={handleColor}></div>
              <div className="purple" onClick={handleColor}></div>
              <div className="pink" onClick={handleColor}></div>
              <div className="orange" onClick={handleColor}></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Appearance;
