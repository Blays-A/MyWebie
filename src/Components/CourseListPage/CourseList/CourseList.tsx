// работает
// import React, {useEffect, useState} from "react";
// import { bindActionCreators, Dispatch } from "redux";
// import { connect } from "react-redux";
// import { Course, fetchCourses } from "./CourseActionff";
// import PurchasedCourses from "./PurchasedCourses";
// import AvailableCourses from "./AvailableCourses";
// import { sampleCourses } from "./AvailableCourses"; // Import sampleCourses
// import "./AvailableCourses"
//
// interface CourseListProps {
//     purchasedCourses: Course[];
//     fetchCourses: () => void;
//     buyCourse: (course: Course) => void;
// }
//
// const CourseList: React.FC<CourseListProps> = ({ purchasedCourses, fetchCourses, buyCourse }) => {
//     const [allPurchasedCourses, setAllPurchasedCourses] = useState<Course[]>([]);
//
//     // Обработчик покупки курса
//     const handleBuyCourse = (course: Course) => {
//         // Добавляем курс в список приобретенных
//         setAllPurchasedCourses([...allPurchasedCourses, course]);
//     };
//
//     return (
//         <div>
//             <PurchasedCourses courses={allPurchasedCourses} />
//             {/* Pass sampleCourses to AvailableCourses */}
//             <AvailableCourses courses={sampleCourses} buyCourse={handleBuyCourse} />
//         </div>
//     );
// };
//
// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return bindActionCreators({ fetchCourses }, dispatch);
// };
//
// const mapStateToProps = (state: any) => ({
//     purchasedCourses: state.courseReducer && state.courseReducer.purchasedCourses ? state.courseReducer.purchasedCourses : [],
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
//
//
// В компоненте, где вы покупаете курсы (например, в CourseList)
import { useDispatch } from 'react-redux';
import { buyCourse } from './CourseActionff';
import PurchasedCourses from "./PurchasedCourses";
import React from 'react';
import AvailableCourses, {sampleCourses} from "./AvailableCourses";

const CourseList = ({ fetchCourses }) => {
    const dispatch = useDispatch();

    const handleBuyCourse = (course) => {
        dispatch(buyCourse(course));
    };

    return (
        <div>
            {/* Передача данных о курсах в компонент PurchasedCourses */}
            <PurchasedCourses />
            {/* Pass sampleCourses to AvailableCourses */}
            <AvailableCourses courses={sampleCourses} buyCourse={handleBuyCourse} />
        </div>
    );
};

export default CourseList;
