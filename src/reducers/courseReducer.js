import * as types from '../actions/actionTypes';

export default function courseReducer (state = [], action) {

    switch(action.type){
        case types.LOAR_COURSES_SUCCESS:
            return [...state , Object.assign({},action.course) ];

        default:
            return state;    
    }
}

