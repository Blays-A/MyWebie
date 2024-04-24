// Redux/store.js

import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers/rootReducer'; // Импортируем корневой редюсер

// Создаем хранилище Redux с применением middleware redux-thunk
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;

// временно
// import { createStore, applyMiddleware, Store } from 'redux';
// import thunk, { ThunkMiddleware } from 'redux-thunk';
// import rootReducer, { RootState } from './reducers/rootReducer'; // Импортируем корневой редюсер
//
// // Создаем хранилище Redux с применением middleware redux-thunk
// const store: Store<RootState, any, ThunkMiddleware<RootState>> = createStore(
//     rootReducer,
//     applyMiddleware(thunk)
// );
//
// export default store;
