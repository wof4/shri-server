import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import buildHistoryReducer from './buildHistoryReducer';
import settingsReducer from './settingsReducer';
import buildDatailsReducer from './buildDatailsReducer';

const reducers = combineReducers({
  buildHistoryReducer,
  settingsReducer,
  buildDatailsReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
