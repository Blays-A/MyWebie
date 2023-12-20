import React from "react";
import Events from "./Events/Events";
import SpecificYoutubeVideo from "../SpecificYoutubeVideo/SpecificYoutubeVideo";
import Footermenu from "../Footermenu/Footermenu";
const Iventpage = () => {
    return (
        <div className="home-page">
            {/* Вставьте компоненты, которые вы хотите отобразить на главной странице */}
            <Events/>
            <SpecificYoutubeVideo/>
            <Footermenu/>
        </div>
    );
};

export default Iventpage;
