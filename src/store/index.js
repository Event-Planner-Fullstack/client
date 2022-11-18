import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import user from './user';
import modals from './modals';
import venue from './venue';
import event from './event';

const rootReducer = combineReducers({
  user,
  modals,
  venue,
  event,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;