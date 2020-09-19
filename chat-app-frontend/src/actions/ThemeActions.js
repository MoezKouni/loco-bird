import { CHANGE_THEME, PIN_TOGGLER, CHANGE_COLOR } from "./types";

export const changeTheme = (theme) => {
  return {
    type: CHANGE_THEME,
    payload: theme,
  };
};

export const pinToggler = () => {
  return {
    type: PIN_TOGGLER,
  };
};

export const changeColor = (color) => {
  return {
    type: CHANGE_COLOR,
    payload: color,
  };
};
