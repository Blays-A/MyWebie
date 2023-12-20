import React from "react";

import Footermenu from "../Footermenu/Footermenu";
import ElementaryBox from "./Elementarybox/ElementaryBox";

const Elementarypage = () => {
    return (
        <div className="home-page">
            {/* Вставьте компоненты, которые вы хотите отобразить на главной странице */}
            <ElementaryBox/>
            <Footermenu/>
        </div>
    );
};

export default Elementarypage;
