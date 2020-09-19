import { CHANGE_THEME } from "../actions/types";

let initState = {
  name: "light",
  iconColors: "gray",
  buttonBg: "white",
  textColor: "black",
  mainBgColor: "#F4F3F8",
  gradientBgColor:
    "linear-gradient( 90deg, rgba(231, 231, 232, 1) 0%, rgba(244, 243, 248, 1) 5% )",
  secondBgColor: "white",
};

const ThemeReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CHANGE_THEME:
      if (payload === "dark") {
        return {
          name: "dark",
          iconColors: "white",
          buttonBg: "gray",
          textColor: "white",
          mainBgColor: "#212121",
          gradientBgColor:
            "linear-gradient(90deg, rgba(24,24,23,1) 0%, rgba(11,12,7,1) 5%)",
          secondBgColor: "#2E2E2E",
        };
      } else {
        return {
          name: "light",
          iconColors: "gray",
          textColor: "black",
          mainBgColor: "#F4F3F8",
          gradientBgColor:
            "linear-gradient( 90deg, rgba(231, 231, 232, 1) 0%, rgba(244, 243, 248, 1) 5% )",
          secondBgColor: "white",
        };
      }
    default:
      return state;
  }
};

export default ThemeReducer;
