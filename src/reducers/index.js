import { combineReducers } from "redux";
import table from "./table";

import ListViewRefreshReducer from './ListViewRefreshReducer'

const rootReducer = combineReducers({
  table,
  ListViewRefreshReducer
});

export default rootReducer;
