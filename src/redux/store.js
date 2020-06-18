import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Reducers
import newsReducer from './reducers/';

// Middleware
const middleware = [thunk];
const enhancer = applyMiddleware(...middleware);

const rootReducer = combineReducers({
  news: newsReducer,
});

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
