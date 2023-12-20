import React from "react";

import Footermenu from "../Footermenu/Footermenu";
import Contact from "./Contact/Contact";

const Contactpage = () => {
    return (
        <div className="home-page">
            {/* Вставьте компоненты, которые вы хотите отобразить на главной странице */}
            <Contact/>
            <Footermenu/>
        </div>
    );
};

export default Contactpage;
