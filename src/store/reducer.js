import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";
import { reducer as songDetailReducer } from "../pages/discover/c-pages/song-detail/store";
import { reducer as loginReducer } from "../components/login-dialog/store";

const cReducer = combineReducers({
  recommend: recommendReducer,
  songDetail: songDetailReducer,
  login: loginReducer,
})

export default cReducer 