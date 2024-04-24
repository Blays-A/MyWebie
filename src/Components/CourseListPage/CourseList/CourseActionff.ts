// CourseActionff.ts

import {Action, Dispatch} from 'redux';

// Определяем константы действий
export enum CourseActionTypes {
    FETCH_COURSES_REQUEST = 'FETCH_COURSES_REQUEST',
    FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS',
    FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE',
    BUY_COURSE = 'BUY_COURSE'
}

// Определяем интерфейс для действия запроса загрузки курсов
export interface FetchCoursesRequestAction extends Action {
    type: CourseActionTypes.FETCH_COURSES_REQUEST;
}


// Определяем интерфейс для действия успешной загрузки курсов
export interface FetchCoursesSuccessAction extends Action {
    type: CourseActionTypes.FETCH_COURSES_SUCCESS;
    payload: Course[];
}

// Определяем интерфейс для действия неудачной загрузки курсов
export interface FetchCoursesFailureAction extends Action {
    type: CourseActionTypes.FETCH_COURSES_FAILURE;
    error: string;
}

// Определяем интерфейс для действия покупки курса
export interface BuyCourseAction extends Action {
    type: CourseActionTypes.BUY_COURSE;
    courseId: number;
}

// Общий тип для всех возможных действий
export type CourseActionff = FetchCoursesRequestAction | FetchCoursesSuccessAction | FetchCoursesFailureAction | BuyCourseAction;

// Интерфейс для курса
export interface Course {
    id: number;
    title: string;
    language: string;
    price: number;
}


// Action creator для запроса загрузки курсов
export const fetchCourses = () => {
    return async (dispatch: Dispatch<CourseActionff>) => {
        try {
            // Выполнение запроса на сервер или другая асинхронная операция
            // Здесь может быть использован, например, fetch API
            dispatch({ type: CourseActionTypes.FETCH_COURSES_REQUEST });

            // Здесь загрузка данных о курсах, предположим, что они приходят в формате JSON
            const response = await fetch('https://example.com/api/courses');
            const data = await response.json();

            dispatch({ type: CourseActionTypes.FETCH_COURSES_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: CourseActionTypes.FETCH_COURSES_FAILURE, error: error.message });
        }
    };
};
