// Redux/store.js
//работает
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers/rootReducer'; // Импортируем корневой редюсер

// Создаем хранилище Redux с применением middleware redux-thunk
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;




