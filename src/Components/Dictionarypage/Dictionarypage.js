import Footermenu from "../Footermenu/Footermenu";
import React from "react";
import Dictionary from "./Dictionary/Dictionary";

const Dictionarypage = () => {
    return (
        <div className="home-page">
            {/* Вставьте компоненты, которые вы хотите отобразить на главной странице */}
            <Dictionary/>
            <Footermenu/>
        </div>
    );
};

export default Dictionarypage;
