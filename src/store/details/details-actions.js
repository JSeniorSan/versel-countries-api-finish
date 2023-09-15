export const SET_DETAILS = "@@DETAILS/SET_DETAILS";
export const SET_LOADING = "@@DETAILS/SET_LOADING";
export const SET_ERROR = "@@DETAILS/SET_ERROR";
export const SET_CLEAR = "@@DETAILS/SET_CLEAR";
export const SET_NEIB = "@@DETAILS/SET_NEIB";
const setLoading = () => ({
  type: SET_LOADING,
});
const setDetails = (data) => ({
  type: SET_DETAILS,
  payload: data,
});
const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const setClear = () => ({
  type: SET_CLEAR,
});

const setNeib = (countries) => ({
  type: SET_NEIB,
  payload: countries,
});

export const setCountryByName =
  (name) =>
  (dispatch, _, { ax, api }) => {
    dispatch(setLoading());

    ax.get(api.COUNTRY_BY_NAME(name))
      .then(({ data }) => {
        dispatch(setDetails(data[0]));
      })
      .catch((err) => dispatch(setError(err.message)));
  };

export const neibThunk =
  (countries) =>
  (dispatch, _, { ax, api }) => {
    ax.get(api.COUTRY_BY_CODE(countries))
      .then(({ data }) =>
        dispatch(setNeib(data.map((item) => item.name.common)))
      )
      .catch((err) => console.error(err));
  };
