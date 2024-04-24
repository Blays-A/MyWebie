import React from "react";
import { Course } from "./CourseActionff";

interface PurchasedCoursesProps {
    courses: Course[];
}

const PurchasedCourses: React.FC<PurchasedCoursesProps> = ({ courses }) => {
    return (
        <div>
            <h2>Приобретенные курсы</h2>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        <h3>{course.title}</h3>
                        <p>Язык: {course.language}</p>
                        <p>Цена: ${course.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PurchasedCourses;

