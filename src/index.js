import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppTest from "./AppTest";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(   <React.StrictMode>
        <App/>
</React.StrictMode> );

//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './Redux/Store'; // Импортируйте ваш Redux Store
// import CourseList from './Components/CourseListPage/CourseList/CourseList.tsx'; // Импортируйте ваш компонент CourseList
//
// ReactDOM.render(
//     <Provider store={store}>
//         <CourseList />
//     </Provider>,
//     document.getElementById('root')
// );

