import React from "react";

import Footermenu from "../Footermenu/Footermenu";
import BeginnerBox from "./Beginner/BeginnerBox";

const Begginerpage = () => {
    return (
        <div className="home-page">
            {/* Вставьте компоненты, которые вы хотите отобразить на главной странице */}
            <BeginnerBox/>
            <Footermenu/>
        </div>
    );
};

export default Begginerpage;
