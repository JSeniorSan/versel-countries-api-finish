import {
  SET_DETAILS,
  SET_LOADING,
  SET_ERROR,
  SET_CLEAR,
  SET_NEIB,
} from "./details-actions";

const initialState = {
  status: "idle",
  error: null,
  countryInfo: null,
  neib: [],
};

export const detailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NEIB:
      return {
        ...state,
        neib: payload,
      };
    case SET_CLEAR:
      return initialState;
    case SET_DETAILS:
      return {
        ...state,
        status: "received",
        error: null,
        countryInfo: payload,
      };

    case SET_ERROR:
      return {
        ...state,
        error: payload,
        status: "rejected",
      };
    case SET_LOADING:
      return {
        ...state,
        status: "loading",
        error: null,
      };

    default:
      return state;
  }
};
