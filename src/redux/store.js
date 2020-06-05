import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // helps with debugging

import rootReducer from './root-reducer';

const middlewares = [logger]; // a list of middlewares i want

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
