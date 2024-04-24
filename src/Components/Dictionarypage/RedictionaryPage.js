import Footermenu from "../Footermenu/Footermenu";
import React from "react";
import Dictionary from "./Dictionary/Dictionary";
import Redictionary from "./Dictionary/Redictionary";

const RedictionaryPage = () => {
    return (
        <div className="home-page">
            {/* Вставьте компоненты, которые вы хотите отобразить на главной странице */}
            <Redictionary/>
            <Footermenu/>
        </div>
    );
};

export default RedictionaryPage;
