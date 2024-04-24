// export const setWord = (word) => ({
//     type: 'SET_WORD',
//     payload: word
// });
//
// export const setDefinition = (definition) => ({
//     type: 'SET_DEFINITION',
//     payload: definition
// });
//
// export const setError = (error) => ({
//     type: 'SET_ERROR',
//     payload: error
// });

// RedictionaryActions.js
export const SET_WORD = 'SET_WORD';
export const SET_DEFINITION = 'SET_DEFINITION';
export const SET_ERROR = 'SET_ERROR';

export const setWord = (word) => ({
    type: SET_WORD,
    payload: word
});

export const setDefinition = (definition) => ({
    type: SET_DEFINITION,
    payload: definition
});

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error
});
