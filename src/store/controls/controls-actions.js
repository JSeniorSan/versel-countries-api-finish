export const SET_SEARCH = "@@CONTROLS/SET_SEARCH";
export const SET_REGION = "@@COUNTRIES/SET_REGION";
export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search,
});
export const setRegion = (region) => ({
  type: SET_REGION,
  payload: region,
});
