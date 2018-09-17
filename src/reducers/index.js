import { combineReducers } from "redux";
import table from "./table";

import ListViewRefreshReducer from './ListViewRefreshReducer'

import RankReducer from '../containers/rank/reducer'
import BannerReducer from '../containers/discover/reducer'
import MusicReducer from './MusicReducer'

const rootReducer = combineReducers({
  table,
  ListViewRefreshReducer,
  RankReducer,
  MusicReducer,
  BannerReducer
});

export default rootReducer;
