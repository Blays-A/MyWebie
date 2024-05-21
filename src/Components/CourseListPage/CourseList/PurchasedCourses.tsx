// работает
// import React from "react";
// import { Course } from "./CourseActionff";
//
// interface PurchasedCoursesProps {
//     courses: Course[];
//     addCourseToLocalStorage: (course: Course) => void;
//     buyCourse: (course: Course) => void;
//     removeCourse: (course: Course) => void;
// }
//
// const PurchasedCourses: React.FC<PurchasedCoursesProps> = ({ courses, addCourseToLocalStorage, buyCourse, removeCourse }) => {
//     return (
//         <div>
//             <h2>Purchased Courses</h2>
//             {courses.length > 0 ? (
//                 <ul>
//                     {courses.map((course) => (
//                         <li key={course.id}>
//                             <h3>{course.title}</h3>
//                             <p>Language: {course.language}</p>
//                             <p>Price: ${course.price}</p>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No purchased courses yet</p>
//             )}
//         </div>
//     );
// };
//
// export default PurchasedCourses;



import React from "react";
import { Course } from "./CourseActionff";

interface PurchasedCoursesProps {
    courses: Course[];
    addCourseToLocalStorage: (course: Course) => void;
    buyCourse: (course: Course) => void;
    removeCourse: (course: Course) => void;
}

const PurchasedCourses: React.FC<PurchasedCoursesProps> = ({ courses, addCourseToLocalStorage, buyCourse, removeCourse }) => {
    return (
        <div>
            <h2>Purchased Courses</h2>
            {courses.length > 0 ? (
                <ul>
                    {courses.map((course) => (
                        <li key={course.id}>
                            <h3>{course.title}</h3>
                            <p>Language: {course.language}</p>
                            <p>Price: ${course.price}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No purchased courses yet</p>
            )}
        </div>
    );
};

export default PurchasedCourses;
