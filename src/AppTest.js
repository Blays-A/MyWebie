import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Courses from './Components/Coursespage/Courses/Courses';
import About from './Components/Aboutpage/About/About';
import Contact from './Components/Contactpage/Contact/Contact';
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import SchoolInfoBox from "./Components/SchoolInfoBox/SchoolInfoBox";
import KnowledgeTest from "./Components/KnowledgeTest/KnowledgeTest";
import Homepage from "./Components/ Homepage/Homepage";

const AppTest = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>

    );

};

export default AppTest;
