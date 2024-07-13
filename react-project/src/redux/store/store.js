import { legacy_createStore, combineReducers } from "redux";
import { portfolioReducer } from "../reducer/portfolioReducer";

const rootReducer = combineReducers({
  portfolio: portfolioReducer,
});

export const store = legacy_createStore(rootReducer);
