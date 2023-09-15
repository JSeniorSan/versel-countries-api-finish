import {
  countryAllData,
  countryError,
  countryLoading,
} from "./county-constants";

export const setAllAction = (data) => ({
  type: countryAllData,
  payload: data,
});

export const setError = (error) => ({
  type: countryError,
  payload: error,
});

export const setLoading = () => ({
  type: countryLoading,
});
