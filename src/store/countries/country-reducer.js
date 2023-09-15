import {
  countryAllData,
  countryError,
  countryLoading,
} from "./county-constants";

const itiitialState = {
  stat: "idle",
  err: null,
  list: [],
};

export const countryReducer = (state = itiitialState, { type, payload }) => {
  switch (type) {
    case countryAllData: {
      return {
        ...state,
        err: null,
        stat: "received",
        list: [...payload],
      };
    }

    case countryError: {
      return {
        ...state,
        err: payload,
        stat: "rejected",
      };
    }

    case countryLoading: {
      return {
        ...state,
        err: null,
        stat: "loading",
      };
    }

    default: {
      return state;
    }
  }
};
