import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import logger from 'redux-logger';
import flightsReducer from './reducers/flights-reducer';
import filterReducer from './reducers/filter-reducer';


const middlewares = [thunkMiddleware]
// const middlewares = [thunkMiddleware, logger]

let rootReducer = combineReducers({
  flightsReducer,
  filterReducer
})

let store = createStore(rootReducer, applyMiddleware(...middlewares));

window.store = store;

export default store;