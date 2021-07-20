
import thunkMiddleware from 'redux-thunk';
import buildHistoryReducer from './buildHistoryReducer';
import buildDatailsReducer from './buildDatailsReducer';
import settingsReducer from './settingsReducer';
import {applyMiddleware, combineReducers, createStore } from 'redux';

export const reducers = combineReducers({
  buildHistoryReducer,
  settingsReducer,
  buildDatailsReducer,
});


const store = createStore(reducers, applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store;

export default store;
