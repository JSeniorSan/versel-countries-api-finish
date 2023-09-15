export const selectCountryReducer = (state) => state.countryReducer;

export const selectRegion = (state, region) => {
  return state.countryReducer.list.filter((item) => {
    if (region === "None") {
      return item;
    } else {
      return item.region;
    }
  });
};
