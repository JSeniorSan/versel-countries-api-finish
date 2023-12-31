import { SET_SEARCH, SET_REGION } from "./controls-actions";

const initialState = {
  search: "",
  region: "",
};

export const controlsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_REGION:
      return {
        ...state,
        region: payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: payload,
      };

    default:
      return state;
  }
};
