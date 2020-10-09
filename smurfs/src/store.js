import { createStore, applyMiddleware } from "redux";
import thunk from 'redx-thunk';
import rootReducer from './reducers/index';

const initalState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initalState, 
    applyMiddleware(...middleware));

export default store;