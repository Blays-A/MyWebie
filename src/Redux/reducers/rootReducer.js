// Redux/rootReducer.js

// import { combineReducers } from 'redux';
// import redictionaryReducer from './redictionaryReducer'; // Импортируйте ваш редюсер
//
// const rootReducer = combineReducers({
//     redictionary: redictionaryReducer // Добавьте ваш редюсер Redictionary в объект для combineReducers
// });
//
// export default rootReducer;


import { combineReducers } from 'redux';
import redictionaryReducer from './redictionaryReducer';




const rootReducer = combineReducers({
    redictionary: redictionaryReducer
});

export default rootReducer;
