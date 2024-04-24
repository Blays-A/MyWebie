import React, { useEffect } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { Course, fetchCourses } from "./CourseActionff";
import PurchasedCourses from "./PurchasedCourses";
import AvailableCourses from "./AvailableCourses";
import { sampleCourses } from "./AvailableCourses"; // Import sampleCourses
import "./AvailableCourses"

interface CourseListProps {
    purchasedCourses: Course[];
    fetchCourses: () => void;
    buyCourse: (course: Course) => void;
}

const CourseList: React.FC<CourseListProps> = ({ purchasedCourses, fetchCourses, buyCourse }) => {
    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    return (
        <div>
            <PurchasedCourses courses={purchasedCourses} />
            {/* Pass sampleCourses to AvailableCourses */}
            <AvailableCourses courses={sampleCourses} buyCourse={buyCourse} />
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({ fetchCourses }, dispatch);
};

const mapStateToProps = (state: any) => ({
    purchasedCourses: state.courseReducer && state.courseReducer.purchasedCourses ? state.courseReducer.purchasedCourses : [],
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);