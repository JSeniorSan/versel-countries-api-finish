import { combineReducers } from "redux";
import { countryReducer } from "./countries/country-reducer";
import { themeReducer } from "./themeSwitcher/theme-reducer";
import { controlsReducer } from "./controls/controls-reducer";
import { detailReducer } from "./details/details-reducer";
export const rootReducer = combineReducers({
  countryReducer,
  themeReducer,
  controlsReducer,
  detailReducer,
});
