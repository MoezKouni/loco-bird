import React, { useState, useEffect } from "react";
import { changeTheme } from "../actions/ThemeActions";
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
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setSelectedValue(theme.name);
  }, [theme]);

  const dispatch = useDispatch();

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
                checked={checked}
                onChange={() => setChecked(!checked)}
                name="jason"
                color="secondary"
              />
            }
            label="Want to switch theme from the menu?"
          />
        </div>
        <div class="toggle">
          <input type="checkbox" id="toggle" />
          <label for="toggle"></label>
        </div>
      </div>
    </Container>
  );
};

export default Appearance;
