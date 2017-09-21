import { combineReducers } from 'redux';
import coursesReducer from './courseReducer';

const rootReducer = combineReducers({
    coursesReducer // courses:course ES6 Short name
});

export default rootReducer;