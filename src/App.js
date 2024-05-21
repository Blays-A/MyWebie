import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Homepage from "./Components/ Homepage/Homepage";
import Eventpage from "./Components/EventPage/Eventpage";
import Elementarypage from "./Components/Elementarypage/Elementarypage";
import Beginnerpage from "./Components/Beginnerpage/Beginnerpage";
import Intermediatepage from "./Components/IntermediatePage/Intermediatepage";
import Contactpage from "./Components/Contactpage/Contactpage";
import Coursespage from "./Components/Coursespage/Coursespage";
import Aboutpage from "./Components/Aboutpage/Aboutpage";
import Dictionarypage from "./Components/Dictionarypage/Dictionarypage";
// import RedictionaryPage from "./Components/Dictionarypage/Dictionary/Redictionary";
import RedictionaryPage from "./Components/Dictionarypage/RedictionaryPage";
import {Provider} from "react-redux";
import store from "./Redux/Store";
import CourseList from "./Components/CourseListPage/CourseList/CourseList";
import CourseListPage from "./Components/CourseListPage/CourseListPage";


//
//
// const App = () => {
//     return (
//         <Router>
//             <Navbar />
//             <Routes>
//                 <Route path="/" element={<Homepage />} />
//                 <Route path="/courses" element={<Coursespage/>} />
//                 <Route path="/about" element={<Aboutpage />} />
//                 <Route path="/contact" element={<Contactpage />} />
//                 <Route path="/about/events" element={<Eventpage/>} />
//                 <Route path="/elementary" element={<Elementarypage/>} />
//                 <Route path="/beginner" element={<Beginnerpage/>}/>
//                 <Route path="/intermediate" element={<Intermediatepage/>}/>
//                 <Route path="/intermediate" element={<Intermediatepage/>}/>
//                 <Route path="/dictionary" element={<Dictionarypage/>}/>
//                 <Route path="/Redict" element={<Redictionary/>}/>
//             </Routes>
//         </Router>
//
//     );
//
// };
//
// export default App;
//


// рабочий
// import store from './Redux/Store';
// import RedictionaryPage from "./Components/Dictionarypage/RedictionaryPage"; // Импортируем созданное хранилище
//
// const App = () => {
//     return (
//         <Provider store={store}>
//             <Router>
//                 <Navbar />
//                 <Routes>
//                     <Route path="/" element={<Homepage />} />
//                     <Route path="/courses" element={<Coursespage />} />
//                     <Route path="/about" element={<Aboutpage />} />
//                     <Route path="/contact" element={<Contactpage />} />
//                     <Route path="/about/events" element={<Eventpage />} />
//                     <Route path="/elementary" element={<Elementarypage />} />
//                     <Route path="/beginner" element={<Beginnerpage />} />
//                     <Route path="/intermediate" element={<Intermediatepage />} />
//                     <Route path="/dictionary" element={<Dictionarypage />} />
//                     <Route path="/Redict" element={<RedictionaryPage />} />
//                 </Routes>
//             </Router>
//         </Provider>
//     );
// };
//
// export default App;

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/courses" element={<Coursespage />} />
                    <Route path="/about" element={<Aboutpage />} />
                    <Route path="/contact" element={<Contactpage />} />
                    <Route path="/about/events" element={<Eventpage />} />
                    <Route path="/elementary" element={<Elementarypage />} />
                    <Route path="/beginner" element={<Beginnerpage />} />
                    <Route path="/intermediate" element={<Intermediatepage />} />
                    <Route path="/dictionary" element={<Dictionarypage />} />
                    <Route path="/Redict" element={<RedictionaryPage />} /> {/* Добавляем маршрут для RedictionaryPage */}
                    <Route path="/CoursesPurchase" element={<CourseListPage />} />
                    {/*<Route path="/ViLearn" element={<Voi/>} />*/}
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;