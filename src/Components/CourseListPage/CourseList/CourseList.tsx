// работает

// import React, { useState, useEffect } from "react";
// import { Course } from "./CourseActionff";
// import PurchasedCourses from "./PurchasedCourses";
// import AvailableCourses from "./AvailableCourses";
// import { sampleCourses } from "./AvailableCourses";
//
// interface CourseListProps {
//     purchasedCourses: Course[];
//     fetchCourses: () => void;
//     buyCourse: (course: Course) => void;
//     removeCourse: (course: Course) => void;
// }
//
// const CourseList: React.FC<CourseListProps> = ({ purchasedCourses, fetchCourses, buyCourse, removeCourse }) => {
//     const [allPurchasedCourses, setAllPurchasedCourses] = useState<Course[]>([]);
//
//     useEffect(() => {
//         const storedCourses = JSON.parse(localStorage.getItem('purchasedCourses') || '[]');
//         setAllPurchasedCourses(storedCourses);
//     }, []);
//
//     const addCourseToLocalStorage = (course: Course) => {
//         const updatedCourses = [...allPurchasedCourses, course];
//         localStorage.setItem('purchasedCourses', JSON.stringify(updatedCourses));
//         setAllPurchasedCourses(updatedCourses);
//     };
//
//     const handleBuyCourse = (course: Course) => {
//         addCourseToLocalStorage(course);
//     };
//
//     const handleRemoveCourse = (course: Course) => {
//         const updatedCourses = allPurchasedCourses.filter(c => c.id !== course.id);
//         localStorage.setItem('purchasedCourses', JSON.stringify(updatedCourses));
//         setAllPurchasedCourses(updatedCourses);
//         removeCourse(course);
//     };
//
//     return (
//         <div>
//             <PurchasedCourses
//                 courses={allPurchasedCourses}
//                 addCourseToLocalStorage={addCourseToLocalStorage}
//                 buyCourse={buyCourse}
//                 removeCourse={handleRemoveCourse}
//             />
//             <AvailableCourses courses={sampleCourses} buyCourse={handleBuyCourse} addCourseToLocalStorage={addCourseToLocalStorage} />
//         </div>
//     );
// };
//
// export default CourseList;



import React, { useState, useEffect } from "react";
import { Course } from "./CourseActionff";
import PurchasedCourses from "./PurchasedCourses";
import AvailableCourses from "./AvailableCourses";
import { sampleCourses } from "./AvailableCourses";

interface CourseListProps {
    purchasedCourses: Course[];
    fetchCourses: () => void;
    buyCourse: (course: Course) => void;
    removeCourse: (course: Course) => void;
}

const CourseList: React.FC<CourseListProps> = ({ purchasedCourses, fetchCourses, buyCourse, removeCourse }) => {
    const [allPurchasedCourses, setAllPurchasedCourses] = useState<Course[]>([]);

    useEffect(() => {
        const storedCourses = JSON.parse(localStorage.getItem('purchasedCourses') || '[]');
        setAllPurchasedCourses(storedCourses);
    }, []);

    const addCourseToLocalStorage = (course: Course) => {
        const updatedCourses = [...allPurchasedCourses, course];
        localStorage.setItem('purchasedCourses', JSON.stringify(updatedCourses));
        setAllPurchasedCourses(updatedCourses);
    };

    const handleBuyCourse = (course: Course) => {
        addCourseToLocalStorage(course);
    };

    const handleRemoveCourse = (course: Course) => {
        const updatedCourses = allPurchasedCourses.filter(c => c.id !== course.id);
        localStorage.setItem('purchasedCourses', JSON.stringify(updatedCourses));
        setAllPurchasedCourses(updatedCourses);
        removeCourse(course);
    };

    return (
        <div>
            <PurchasedCourses
                courses={allPurchasedCourses}
                addCourseToLocalStorage={addCourseToLocalStorage}
                buyCourse={buyCourse}
                removeCourse={handleRemoveCourse}
            />
            <AvailableCourses courses={sampleCourses} buyCourse={handleBuyCourse} addCourseToLocalStorage={addCourseToLocalStorage} />
        </div>
    );
};

export default CourseList;

