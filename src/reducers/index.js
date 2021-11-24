import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';
import api from './addAPI';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    api: api,
})

export default allReducers;