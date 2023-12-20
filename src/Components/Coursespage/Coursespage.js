import React from "react";
import Footermenu from "../Footermenu/Footermenu";
import Courses from "./Courses/Courses";
const Coursespage = () => {
    return (
        <div className="home-page">
            <Courses/>
            <Footermenu/>
        </div>
    );
};

export default Coursespage;
