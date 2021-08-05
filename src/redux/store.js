import counterReducer from "./reducers/counter";
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  counter: counterReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;