import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import logger from 'redux-logger';
import flightsReducer from './reducers/flights-reducer';


const middlewares = [thunkMiddleware]
// const middlewares = [thunkMiddleware, logger]

let rootReducer = combineReducers({
  flightsReducer
})

let store = createStore(rootReducer, applyMiddleware(...middlewares));

window.store = store;

export default store;