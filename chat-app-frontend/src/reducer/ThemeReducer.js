import { CHANGE_THEME, PIN_TOGGLER, CHANGE_COLOR } from "../actions/types";

let initState = {
  name: "light",
  iconColors: "gray",
  buttonBg: "white",
  textColor: "black",
  mainBgColor: "#F4F3F8",
  gradientBgColor:
    "linear-gradient( 90deg, rgba(231, 231, 232, 1) 0%, rgba(244, 243, 248, 1) 5% )",
  secondBgColor: "white",
  pinToggle: true,
  themeColor: "blue",
};

const ThemeReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CHANGE_THEME:
      if (payload === "dark") {
        return {
          ...state,
          name: "dark",
          iconColors: "white",
          buttonBg: "gray",
          textColor: "white",
          mainBgColor: "##292C35",
          gradientBgColor: "#292C35",
          secondBgColor: "#16181d",
        };
      } else {
        return {
          ...state,
          name: "light",
          iconColors: "gray",
          textColor: "black",
          mainBgColor: "#F4F3F8",
          gradientBgColor:
            "linear-gradient( 90deg, rgba(231, 231, 232, 1) 0%, rgba(244, 243, 248, 1) 5% )",
          secondBgColor: "white",
        };
      }
    case PIN_TOGGLER:
      return {
        ...state,
        pinToggle: !state.pinToggle,
      };
    case CHANGE_COLOR:
      return {
        ...state,
        themeColor: payload,
      };
    default:
      return state;
  }
};

export default ThemeReducer;
