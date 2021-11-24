import counterReducer from './counter';
import loggedReducer from './isLogged';
import table from './addTable';
import { combineReducers } from 'redux';
import api from './addAPI';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    table1: table,
    api: api
})

export default allReducers;