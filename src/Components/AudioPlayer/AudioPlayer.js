import React, { useState } from 'react';
import './AudioPlayer.css'
const AudioPlayer = () => {
    const audioFiles = [
        '/Ed-Sheeran-Shape-of-You-Lyrics.mp3',
        '/BAD-OMENS-What-It-Cost-Like-A-Villain-Lyrics-Video.mp3',
        '/audio_file_3.mp3',
        // Добавьте пути к вашим аудиофайлам
    ];

    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const currentAudio = new Audio(audioFiles[currentTrackIndex]);

    const playAudio = () => {
        currentAudio.play();
    };

    const pauseAudio = () => {
        currentAudio.pause();
    };

    const nextAudio = () => {
        if (currentTrackIndex < audioFiles.length - 1) {
            setCurrentTrackIndex(currentTrackIndex + 1);
        } else {
            setCurrentTrackIndex(0); // Вернуться к началу, если достигнут конец списка
        }
        currentAudio.src = audioFiles[currentTrackIndex];
        currentAudio.play();
    };

    const prevAudio = () => {
        if (currentTrackIndex > 0) {
            setCurrentTrackIndex(currentTrackIndex - 1);
        } else {
            setCurrentTrackIndex(audioFiles.length - 1); // Перейти к последней мелодии, если достигнут начало списка
        }
        currentAudio.src = audioFiles[currentTrackIndex];
        currentAudio.play();
    };

    return (
        <div className="audio-player">
            <audio controls src={audioFiles[currentTrackIndex]} type="audio/mpeg">
                Ваш браузер не поддерживает аудио тег.
            </audio>
            <div className="audio-controls">
                <button onClick={playAudio}>Play</button>
                <button onClick={pauseAudio}>Pause</button>
                <button onClick={nextAudio}>Next</button>
                <button onClick={prevAudio}>Prev</button>
            </div>
        </div>
    );
};

export default AudioPlayer;
