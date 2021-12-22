import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import MainReducer from '../reducers';

const Store = createStore(MainReducer, applyMiddleware(logger));

export default Store;
