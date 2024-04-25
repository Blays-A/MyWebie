// работает
// import React from "react";
// import {BuyCourseAction, Course, CourseActionTypes} from "./CourseActionff";
//
// interface PurchasedCoursesProps {
//     courses: Course[];
// }
//
// // Определяем action creator для покупки курса
// export const buyCourse = (courseId: number): BuyCourseAction => {
//     return {
//         type: CourseActionTypes.BUY_COURSE,
//         courseId
//     };
// };
//
// const PurchasedCourses: React.FC<PurchasedCoursesProps> = ({ courses }) => {
//     return (
//         <div>
//             <h2>Приобретенные курсы</h2>
//             <ul>
//                 {courses.map((course) => (
//                     <li key={course.id}>
//                         <h3>{course.title}</h3>
//                         <p>Язык: {course.language}</p>
//                         <p>Цена: ${course.price}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
//
//
// export default PurchasedCourses;

// В вашем компоненте PurchasedCourses
import React from 'react';
import { connect } from 'react-redux';

const PurchasedCourses = ({ purchasedCourses }) => {
    return (
        <div>
            <h2>Приобретенные курсы</h2>
            <ul>
                {purchasedCourses.map((course) => (
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

const mapStateToProps = (state) => ({
    purchasedCourses: state.courseReducer.purchasedCourses
});

export default connect(mapStateToProps)(PurchasedCourses);

