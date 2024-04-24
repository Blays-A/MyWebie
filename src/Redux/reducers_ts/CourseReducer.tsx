//
import { CourseActionff, CourseActionTypes, Course } from '../../Components/CourseListPage/CourseList/CourseActionff';

interface CourseState {
    courses: Course[];
    loading: boolean;
    error: string | null;
}

const initialState: CourseState = {
    courses: [],
    loading: false,
    error: null
};

const courseReducer = (state = initialState, action: CourseActionff): CourseState => {
    switch (action.type) {
        case CourseActionTypes.FETCH_COURSES_REQUEST:
            return { ...state, loading: true, error: null };
        case CourseActionTypes.FETCH_COURSES_SUCCESS:
            return { ...state, loading: false, courses: action.payload, error: null };
        case CourseActionTypes.FETCH_COURSES_FAILURE:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
};

export default courseReducer;
