import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { dayReducer } from './dayReducer';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    routing,
    days: dayReducer
});

export default rootReducer;
