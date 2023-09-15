import {
  setAllAction,
  setLoading,
  setError,
} from "../store/countries/country-actions";

export const Api =
  () =>
  (dispatch, _, { ax, api }) => {
    dispatch(setLoading());

    ax.get(api.ALL_COUNTRIES)
      .then(({ data }) => {
        dispatch(setAllAction(data));
      })
      .catch((err) => {
        dispatch(setError(err));
      });
  };
