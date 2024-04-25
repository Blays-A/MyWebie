// работает
import { combineReducers } from 'redux';
import courseReducer from "./CourseReducer";



const rootReducer = combineReducers({
    courses: courseReducer // Добавляем редюсер для управления курсами
});

export default rootReducer;

