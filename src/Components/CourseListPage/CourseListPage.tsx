import React from "react";

import CourseList from "../CourseListPage/CourseList/CourseList"; // Путь к компоненту CourseList
import FooterMenu from "../Footermenu/Footermenu";




const CourseListPage = () => {
    // Предположим, что у вас есть данные курсов и функции для работы с ними
    const purchasedCourses = []; // массив купленных курсов
    const fetchCourses = () => {}; // функция для загрузки курсов
    const buyCourse = () => {}; // функция для покупки курса
    const removeCourse = () => {}; // функция для удаления курса

    return (
        <div className="course-list-page">
            <CourseList
                purchasedCourses={purchasedCourses}
                fetchCourses={fetchCourses}
                buyCourse={buyCourse}
                removeCourse={removeCourse}
            />
            <FooterMenu />
        </div>
    );
};

export default CourseListPage;