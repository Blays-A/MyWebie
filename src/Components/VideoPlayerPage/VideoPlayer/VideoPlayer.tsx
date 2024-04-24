// VideoPlayer.tsx

// @ts-ignore
// // VideoPlayer.tsx
// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
// import { playVideo, pauseVideo, setVolume } from './ViAction'; // Путь к вашим действиям Redux
//
// interface VideoPlayerProps {
//     isPlaying: boolean;
//     playVideo: () => void;
//     pauseVideo: () => void;
//     setVolume: (volume: number) => void;
// }
//
// const VideoPlayer: React.FC<VideoPlayerProps> = ({ isPlaying, playVideo, pauseVideo, setVolume }) => {
//     const [localVolume, setLocalVolume] = useState<number>(0);
//
//     const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const newVolume = parseInt(e.target.value);
//         setLocalVolume(newVolume);
//         setVolume(newVolume);
//     };
//
//     return (
//         <div>
//             <video controls autoPlay={isPlaying}>
//                 <source src="your_video.mp4" type="video/mp4" />
//             </video>
//             <button onClick={isPlaying ? pauseVideo : playVideo}>
//                 {isPlaying ? 'Pause' : 'Play'}
//             </button>
//             <input type="range" min="0" max="100" value={localVolume} onChange={handleVolumeChange} />
//         </div>
//     );
// };
//
// const mapStateToProps = (state: any) => ({
//     isPlaying: state.isPlaying
// });
//
// const mapDispatchToProps = (dispatch: Dispatch) => ({
//     playVideo: () => dispatch(playVideo()),
//     pauseVideo: () => dispatch(pauseVideo()),
//     setVolume: (volume: number) => dispatch(setVolume(volume))
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);

