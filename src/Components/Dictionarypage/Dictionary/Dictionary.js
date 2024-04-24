

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dictionary.css'; // Подключение файла стилей

function Dictionary() {
    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState(null);
    const [error, setError] = useState('');
    const [savedWords, setSavedWords] = useState([]);
    const [expandedWord, setExpandedWord] = useState(null); // Track expanded word
    const [selectedWordDefinition, setSelectedWordDefinition] = useState(null); // Track selected word definition
    const [modalStyle, setModalStyle] = useState({}); // Track modal style
    const [showModal, setShowModal] = useState(false); // Track modal visibility

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
            // Check if word is already saved
            const isWordSaved = savedWords.some(savedWord => savedWord.word === word);
            if (isWordSaved) {
                setShowModal(true);
            } else {
                const newSavedWords = [...savedWords, { word, definition }];
                setSavedWords(newSavedWords);
                localStorage.setItem('savedWords', JSON.stringify(newSavedWords));
                setWord('');
                setDefinition(null);
            }
        }
    };

    const deleteWord = (index) => {
        const updatedSavedWords = savedWords.filter((_, i) => i !== index);
        setSavedWords(updatedSavedWords);
        localStorage.setItem('savedWords', JSON.stringify(updatedSavedWords));
    };

    const toggleExpandedWord = (wordIndex) => {
        if (wordIndex === expandedWord) {
            setExpandedWord(null); // Collapse if already expanded
        } else {
            setExpandedWord(wordIndex);
        }
    };

    const openDefinitionModal = (definition) => {
        setSelectedWordDefinition(definition);

        // Calculate modal size dynamically based on content
        const contentWidth = definition.word.length * 12; // Assuming average character width of 12px
        const contentHeight = definition.meanings.reduce((acc, meaning) => {
            return acc + meaning.definitions.reduce((defAcc, def) => {
                return defAcc + def.definition.length;
            }, 0);
        }, 0) * 20; // Assuming average line height of 20px

        const modalWidth = Math.min(contentWidth, window.innerWidth * 0.8); // Set max width to 80% of viewport width
        const modalHeight = Math.min(contentHeight, window.innerHeight * 0.8); // Set max height to 80% of viewport height

        setModalStyle({
            width: `${modalWidth}px`,
            height: `${modalHeight}px`
        });
    };

    const closeDefinitionModal = () => {
        setSelectedWordDefinition(null);
    };

    const closeModal = () => {
        setShowModal(false);
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
                            <span onClick={() => openDefinitionModal(item.definition[0])}>{item.word}</span>
                            <button onClick={() => deleteWord(index)}>Delete</button>
                            {expandedWord === index && (
                                <div className="expanded-definition">
                                    {item.definition.map((defItem, defIndex) => (
                                        <div key={defIndex}>
                                            <h3>{defItem.partOfSpeech}</h3>
                                            <p>Definition: {defItem.definitions[0].definition}</p>
                                            {defItem.definitions[0].example && <p>Example: {defItem.definitions[0].example}</p>}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            {showModal && (
                <div className="modal-container">
                    <div className="modal-content" style={modalStyle}>
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <p>This word is already saved.</p>
                    </div>
                </div>
            )}
            {selectedWordDefinition && (
                <div className="modal-container">
                    <div className="modal-content" style={modalStyle}>
                        <div className="modal-header">
                            <h2 className="modal-title">{selectedWordDefinition.word}</h2>
                            <span className="close-button" onClick={closeDefinitionModal}>&times;</span>
                        </div>
                        {selectedWordDefinition.meanings.map((meaning, index) => (
                            <div key={index}>
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
                </div>
            )}
        </div>
    );
}

export default Dictionary;























// Dictionary.js
// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
// import { saveWordAction, deleteWoAction } from './actions';
// import './Dictionary.css';
//
// function Dictionary() {
//     const [word, setWord] = useState('');
//     const [definition, setDefinition] = useState(null);
//     const [error, setError] = useState('');
//     const savedWords = useSelector(state => state.savedWords);
//     const dispatch = useDispatch();
//
//     useEffect(() => {
//         // Тут вы можете отправить запрос к API, если нужно
//     }, []);
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
//     const saveWord = () => {
//         if (word && definition) {
//             dispatch(saveWordAction({ word, definition }));
//             setWord('');
//             setDefinition(null);
//         }
//     };
//
//     const deleteWord = (index) => {
//         dispatch(deleteWordAction(index));
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
//
//             <div className="actions">
//                 <button onClick={saveWord} disabled={!word || !definition}>Save Word</button>
//             </div>
//             <div className="saved-words">
//                 <h2>Saved Words</h2>
//                 <ul>
//                     {savedWords.map((item, index) => (
//                         <li key={index}>
//                             <span>{item.word}</span>
//                             <button onClick={() => deleteWord(index)}>Delete</button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }
//
// export default Dictionary;
