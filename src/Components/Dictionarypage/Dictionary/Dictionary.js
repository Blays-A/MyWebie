// import React, { useState } from 'react';
// import axios from 'axios';
// import './Dictionary.css'; // Подключение файла стилей
//
// function Dictionary() {
//     const [word, setWord] = useState('');
//     const [definition, setDefinition] = useState(null);
//     const [error, setError] = useState('');
//
//     const fetchDefinition = async () => {
//         try {
//             const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
//             setDefinition(response.data);
//             setError('');
//         } catch (err) {
//             setDefinition(null);
//             setError('Word not found. Please try again.');
//         }
//     };
//
//     return (
//         <div className="dictionary-container">
//             <h1 className="dictionary-heading">Dictionary</h1>
//             <div className="search-container">
//                 <input
//                     type="text"
//                     placeholder="Enter a word"
//                     value={word}
//                     onChange={(e) => setWord(e.target.value)}
//                     className="search-input"
//                 />
//                 <button onClick={fetchDefinition} className="search-button">Search</button>
//             </div>
//
//             {error && <p className="error-message">{error}</p>}
//
//             {definition && (
//                 <div className="definitions">
//                     {definition.map((item, index) => (
//                         <div key={index} className="word-definition">
//                             <h2 className="word">{item.word}</h2>
//                             {item.phonetics && (
//                                 <div className="phonetics">
//                                     <p>Phonetic: {item.phonetic}</p>
//                                     {item.phonetics.map((phonetic, index) => (
//                                         <div key={index} className="phonetic-text">
//                                             <p>{phonetic.text}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                             {item.meanings.map((meaning, index) => (
//                                 <div key={index} className="part-of-speech">
//                                     <h3>{meaning.partOfSpeech}</h3>
//                                     {meaning.definitions.map((def, index) => (
//                                         <div key={index} className="definition">
//                                             <p>Definition: {def.definition}</p>
//                                             {def.example && <p>Example: {def.example}</p>}
//                                         </div>
//                                     ))}
//                                 </div>
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }
//
//
//
//
// export default Dictionary;
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Dictionary.css'; // Подключение файла стилей
//
// function Dictionary() {
//     const [word, setWord] = useState('');
//     const [definition, setDefinition] = useState(null);
//     const [error, setError] = useState('');
//
//     const fetchDefinition = async () => {
//         try {
//             const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
//             setDefinition(response.data);
//             setError('');
//         } catch (err) {
//             setDefinition(null);
//             setError('Word not found. Please try again.');
//         }
//     };
//
//     return (
//         <div className="dictionary-container">
//             <h1 className="dictionary-heading">Dictionary</h1>
//             <div className="search-container">
//                 <input
//                     type="text"
//                     placeholder="Enter a word"
//                     value={word}
//                     onChange={(e) => setWord(e.target.value)}
//                     className="search-input"
//                 />
//                 <button onClick={fetchDefinition} className="search-button">Search</button>
//             </div>
//
//             {error && <p className="error-message">{error}</p>}
//
//             {definition && (
//                 <div className="definitions">
//                     {definition.map((item, index) => (
//                         <div key={index} className="word-definition">
//                             <h2 className="word">{item.word}</h2>
//                             {item.phonetics && (
//                                 <div className="phonetics">
//                                     <p>Phonetic: {item.phonetic}</p>
//                                     {item.phonetics.map((phonetic, index) => (
//                                         <div key={index} className="phonetic-text">
//                                             <p>{phonetic.text}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                             {item.meanings.map((meaning, index) => (
//                                 <div key={index} className="part-of-speech">
//                                     <h3>{meaning.partOfSpeech}</h3>
//                                     {meaning.definitions.map((def, index) => (
//                                         <div key={index} className="definition">
//                                             <p>Definition: {def.definition}</p>
//                                             {def.example && <p>Example: {def.example}</p>}
//                                         </div>
//                                     ))}
//                                 </div>
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//
//             )}
//
//         </div>
//
//     );
// }
//
// export default Dictionary;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dictionary.css'; // Подключение файла стилей

function Dictionary() {
    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState(null);
    const [error, setError] = useState('');
    const [savedWords, setSavedWords] = useState([]);

    useEffect(() => {
        const savedWordsFromStorage = localStorage.getItem('savedWords');
        if (savedWordsFromStorage) {
            setSavedWords(JSON.parse(savedWordsFromStorage));
        }
    }, []);

    const fetchDefinition = async () => {
        try {
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            setDefinition(response.data);
            setError('');
        } catch (err) {
            setDefinition(null);
            setError('Word not found. Please try again.');
        }
    };

    const saveWord = () => {
        if (word && definition) {
            const newSavedWords = [...savedWords, { word, definition }];
            setSavedWords(newSavedWords);
            localStorage.setItem('savedWords', JSON.stringify(newSavedWords));
            setWord('');
            setDefinition(null);
        }
    };

    const deleteWord = (index) => {
        const updatedSavedWords = savedWords.filter((_, i) => i !== index);
        setSavedWords(updatedSavedWords);
        localStorage.setItem('savedWords', JSON.stringify(updatedSavedWords));
    };

    return (
        <div className="dictionary-container">
            <h1 className="dictionary-heading">Dictionary</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Enter a word"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    className="search-input"
                />
                <button onClick={fetchDefinition} className="search-button">Search</button>
            </div>

            {error && <p className="error-message">{error}</p>}

            {definition && (
                <div className="definitions">
                    {definition.map((item, index) => (
                        <div key={index} className="word-definition">
                            <h2 className="word">{item.word}</h2>
                            {item.phonetics && (
                                <div className="phonetics">
                                    <p>Phonetic: {item.phonetic}</p>
                                    {item.phonetics.map((phonetic, index) => (
                                        <div key={index} className="phonetic-text">
                                            <p>{phonetic.text}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {item.meanings.map((meaning, index) => (
                                <div key={index} className="part-of-speech">
                                    <h3>{meaning.partOfSpeech}</h3>
                                    {meaning.definitions.map((def, index) => (
                                        <div key={index} className="definition">
                                            <p>Definition: {def.definition}</p>
                                            {def.example && <p>Example: {def.example}</p>}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}

            <div className="actions">
                <button onClick={saveWord} disabled={!word || !definition}>Save Word</button>
            </div>
            <div className="saved-words">
                <h2>Saved Words</h2>
                <ul>
                    {savedWords.map((item, index) => (
                        <li key={index}>
                            <span>{item.word}</span>
                            <button onClick={() => deleteWord(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Dictionary;
