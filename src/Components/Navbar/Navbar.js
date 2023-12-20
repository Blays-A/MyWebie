import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Подключаем файл стилей для компонента Navbar
const Navbar = () => {
    const [showAboutOptions, setShowAboutOptions] = useState(false);

    const toggleAboutOptions = () => {
        setShowAboutOptions(!showAboutOptions);
    };
    return (
        <nav className="navbar">
            <div className="navbar-left">
                {/* Размещаем логотип из папки public */}
                <img src="/LogoChanged.png" alt="Логотип" className="navbar-logo" />
                <span className="logo-text">Blays Lang</span>
            </div>
            <div className="navbar-center">
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/courses">Курсы</Link></li>
                    <li className="about-dropdown" onMouseEnter={toggleAboutOptions} onMouseLeave={toggleAboutOptions}>
                        <span>О нас</span>
                        {showAboutOptions && (
                            <ul className="about-submenu">
                                <ul className="about-submenu">
                                    <li className="about-submenu-item"><Link to="/about">О компании</Link></li>
                                    <li className="about-submenu-item"><Link to="/about/events">Мероприятия</Link></li>
                                </ul>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/contact">Контакты</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'
// const Navbar = () => {
//     const [showAboutOptions, setShowAboutOptions] = useState(false);
//
//     const toggleAboutOptions = () => {
//         setShowAboutOptions(!showAboutOptions);
//     };
//
//     return (
//         <nav className="navbar">
//             <div className="navbar-left">
//                 {/* Размещаем логотип из папки public */}
//                 <img src="/LogoChanged.png" alt="Логотип" className="navbar-logo" />
//                 <span className="logo-text">Blays Lang</span>
//             </div>
//             <div className="navbar-center">
//                 <ul>
//                     <li><Link to="/">Главная</Link></li>
//                     <li><Link to="/courses">Курсы</Link></li>
//                     <li className="about-dropdown" onMouseEnter={toggleAboutOptions} onMouseLeave={toggleAboutOptions}>
//                         <span>О нас</span>
//                         {showAboutOptions && (
//                             <ul className="about-submenu">
//                                 <ul className="about-submenu">
//                                     <li className="about-submenu-item"><Link to="/about">О компании</Link></li>
//                                     <li className="about-submenu-item"><Link to="/about/events">Мероприятия</Link></li>
//                                 </ul>
//                             </ul>
//                         )}
//                     </li>
//                     <li><Link to="/contact">Контакты</Link></li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };
//
// export default Navbar;
