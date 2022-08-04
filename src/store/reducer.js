import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";
import { reducer as songDetailReducer } from "../pages/discover/c-pages/song-detail/store";
import { reducer as songListDetailReducer } from "../pages/discover/c-pages/song-list-details/store";
import { reducer as loginReducer } from "../components/login-dialog/store";
import { reducer as playerReducer } from "../components/player/store";

const cReducer = combineReducers({
  recommend: recommendReducer,
  songDetail: songDetailReducer,
  songListDetails: songListDetailReducer,
  login: loginReducer,
  player: playerReducer,
})

export default cReducer 