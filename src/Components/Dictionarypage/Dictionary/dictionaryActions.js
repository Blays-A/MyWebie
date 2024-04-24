
export const setWord = (word) => ({
    type: 'SET_WORD',
    payload: word
});

export const setDefinition = (definition) => ({
    type: 'SET_DEFINITION',
    payload: definition
});

export const setError = (error) => ({
    type: 'SET_ERROR',
    payload: error
});