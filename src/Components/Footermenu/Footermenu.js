import React from 'react';
import { Link } from 'react-router-dom';
import './Footermenu.css'

const FooterMenu = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about/events">Events</Link>
                    </li>
                    {/* Добавление ссылок на уровни знаний */}
                    <li>
                        <Link to="/elementary">Elementary</Link>
                    </li>
                    <li>
                        <Link to="/beginner">Beginner</Link>
                    </li>
                    <li>
                        <Link to="/intermediate">Intermediate</Link>
                    </li>
                    <li>
                        <Link to="/dictionary">Dictionary</Link>
                    </li>
                </ul>
                <div className={"footerimg d-flex justify-content-center align-items-center "}>
                    <img  src={"mastercard.png"}/>
                    <img width = {120} height={70} src={"visaP.png"}/>
                </div>
                <div>
                    <h1>©2023 BlaysLang</h1>
                </div>
            </nav>
        </footer>
    );
};

export default FooterMenu;
