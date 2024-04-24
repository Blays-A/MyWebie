// Redux/reducers/redictionaryReducer.js

// RedictionaryReducer.js
import {
    setWord,
    setDefinition,
    setError,
    SET_WORD,
    SET_DEFINITION,
    SET_ERROR
} from '../../Components/Dictionarypage/Dictionary/RedictionaryActions';



const initialState = {
    word: '',
    definition: null,
    error: ''
};

const redictionaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WORD:
            return {
                ...state,
                word: action.payload
            };
        case SET_DEFINITION:
            return {
                ...state,
                definition: action.payload
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default redictionaryReducer;
