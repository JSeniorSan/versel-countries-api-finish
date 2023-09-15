import CountryList from "./CountryList";
import React from "react";
import SortPanel from "./SortPanel";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectCountryReducer } from "../store/countries/country-selectors";
import { selectRegionState } from "../store/controls/controls-selectors";
import { Api } from "../API/Api";

export default function MainBlock() {
  // const fisterFull = useSelector(selectFilterState);
  const { stat, err, list } = useSelector(selectCountryReducer);
  const reg = useSelector(selectRegionState);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!list.length) {
      dispatch(Api());
    }
  }, [list.length, dispatch]);

  return (
    <main>
      <SortPanel region={reg} />
      {err && <h2>Can't fetch data</h2>}
      {stat === "loading" && <h2>Loading...</h2>}
      {stat === "received" && <CountryList />}
    </main>
  );
}
