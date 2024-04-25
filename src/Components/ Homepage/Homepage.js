import React from 'react';
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import SchoolInfoBox from "../SchoolInfoBox/SchoolInfoBox";
import KnowledgeTest from "../KnowledgeTest/KnowledgeTest";
import Price from "../Price/Price";
import Vibe from "../Vibe/Vibe";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Subscription from "../Subscription/Subscription";
import Dropdown from "../Dropdown/Dropdown";
import Footermenu from "../Footermenu/Footermenu";

const HomePage = () => {
    return (
        <div className="home-page">
            <RegistrationForm/>
            <SchoolInfoBox />
            <KnowledgeTest />
            {/*<Price />*/}
            <Vibe/>
            <AudioPlayer/>
            <Subscription/>
            <Dropdown/>
            <Footermenu/>
        </div>
    );
};

export default HomePage;
