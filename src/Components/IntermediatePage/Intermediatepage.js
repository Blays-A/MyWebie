import React from "react";

import Footermenu from "../Footermenu/Footermenu";
import Intermediatebox from "./Intermediatebox/Intermediatebox";

const Intermediatepage = () => {
    return (
        <div className="home-page">
            {/* Вставьте компоненты, которые вы хотите отобразить на главной странице */}
            <Intermediatebox/>
            <Footermenu/>
        </div>
    );
};

export default Intermediatepage;
