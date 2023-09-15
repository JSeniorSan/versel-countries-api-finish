export const selectSearch = (state) => state.controlsReducer.search;
export const selectRegionState = (state) => state.controlsReducer.region;
export const selectFilterState = (state) => state.controlsReducer;
export const selectFilterSearch = (newState, { search = "", region = "" }) => {
  return newState.list.filter((item) => {
    return (
      item.name.common.toLowerCase().includes(search.toLowerCase()) &&
      item.region.toLowerCase().includes(region.toLowerCase())
    );
  });
};
