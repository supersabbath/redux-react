import * as type from './actionTypes';
import coursesAPI from '../api/mockCourseApi';

export function loadCoursesSuccess(course) {
    return { type: type.LOAR_COURSES_SUCCESS , course:course };
}

export function loadCourses(){
    return function (dispatch) {
        return coursesAPI.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch( error  => {
            throw error;
        })
    }
}