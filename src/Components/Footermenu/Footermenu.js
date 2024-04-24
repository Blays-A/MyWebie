// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Footermenu.css'
//
// const FooterMenu = () => {
//     return (
//         <footer>
//             <nav>
//                 <ul>
//                     <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/courses">Courses</Link>
//                     </li>
//                     <li>
//                         <Link to="/about">About</Link>
//                     </li>
//                     <li>
//                         <Link to="/contact">Contact</Link>
//                     </li>
//                     <li>
//                         <Link to="/about/events">Events</Link>
//                     </li>
//                     {/* Добавление ссылок на уровни знаний */}
//                     <li>
//                         <Link to="/elementary">Elementary</Link>
//                     </li>
//                     <li>
//                         <Link to="/beginner">Beginner</Link>
//                     </li>
//                     <li>
//                         <Link to="/intermediate">Intermediate</Link>
//                     </li>
//                     <li>
//                         <Link to="/dictionary">Dictionary</Link>
//                     </li>
//                     <li>
//                         <Link to="/Redict">Redictionary</Link>
//                     </li>
//                 </ul>
//                 <div className={"footerimg d-flex justify-content-center align-items-center "}>
//                     <img  src={"mastercard.png"}/>
//                     <img width = {120} height={70} src={"visaP.png"}/>
//                 </div>
//                 <div>
//                     <h1>©2023 BlaysLang</h1>
//                 </div>
//             </nav>
//         </footer>
//     );
// };
//
// export default FooterMenu;

import React from 'react';
import { Link } from 'react-router-dom';
import './Footermenu.css'


import { NavLink } from 'react-router-dom';


const FooterMenu = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/courses" activeClassName="active">Courses</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                    <li><NavLink to="/about/events" activeClassName="active">Events</NavLink></li>
                    {/* Добавление NavLink для остальных ссылок */}
                    <li><NavLink to="/elementary" activeClassName="active">Elementary</NavLink></li>
                    <li><NavLink to="/beginner" activeClassName="active">Beginner</NavLink></li>
                    <li><NavLink to="/intermediate" activeClassName="active">Intermediate</NavLink></li>
                    <li><NavLink to="/dictionary" activeClassName="active">Dictionary</NavLink></li>
                    <li><NavLink to="/Redict" activeClassName="active">Redictionary</NavLink></li>
                    <li><NavLink to="/CoursesPurchase" activeClassName="active">Courses</NavLink></li>
                    {/*<li><NavLink to="/ViLearn" activeClassName="active">ViLearn</NavLink></li>*/}
                </ul>
                <div className={"footerimg d-flex justify-content-center align-items-center "}>
                    <img src={"mastercard.png"} alt="Mastercard Logo" />
                    <img width={120} height={70} src={"visaP.png"} alt="Visa Logo" />
                </div>
                <div>
                    <h1>©2023 BlaysLang</h1>
                </div>
            </nav>
        </footer>
    );
};

export default FooterMenu;
