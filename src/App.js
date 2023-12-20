import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Courses from "./Components/Coursespage/Courses/Courses";
import About from './Components/Aboutpage/About/About';
import Contact from './Components/Contactpage/Contact/Contact';
import Homepage from "./Components/ Homepage/Homepage";
import Events from "./Components/EventPage/Events/Events";
import Eventpage from "./Components/EventPage/Eventpage";
import ElementaryBox from "./Components/Elementarypage/Elementarybox/ElementaryBox";
import Elementarypage from "./Components/Elementarypage/Elementarypage";
import BeginnerBox from "./Components/Beginnerpage/Beginner/BeginnerBox";
import Beginnerpage from "./Components/Beginnerpage/Beginnerpage";
import Intermediatepage from "./Components/IntermediatePage/Intermediatepage";
import Contactpage from "./Components/Contactpage/Contactpage";
import Coursespage from "./Components/Coursespage/Coursespage";
import Aboutpage from "./Components/Aboutpage/Aboutpage";
import Dictionary from "./Components/Dictionarypage/Dictionary/Dictionary";
import Dictionarypage from "./Components/Dictionarypage/Dictionarypage";


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/courses" element={<Coursespage/>} />
                <Route path="/about" element={<Aboutpage />} />
                <Route path="/contact" element={<Contactpage />} />
                <Route path="/about/events" element={<Eventpage/>} />
                <Route path="/elementary" element={<Elementarypage/>} />
                <Route path="/beginner" element={<Beginnerpage/>}/>
                <Route path="/intermediate" element={<Intermediatepage/>}/>
                <Route path="/intermediate" element={<Intermediatepage/>}/>
                <Route path="/dictionary" element={<Dictionarypage/>}/>
            </Routes>
        </Router>

    );

};

export default App;
