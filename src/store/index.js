import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";
import * as api from "../API/config";

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ ax: axios, api }))
  )
);
