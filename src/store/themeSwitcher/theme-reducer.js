export const themeReducer = (state = "Light", { type }) => {
  switch (type) {
    case "Dark": {
      return "Dark";
    }
    case "Light": {
      return "Light";
    }

    default: {
      return state;
    }
  }
};
