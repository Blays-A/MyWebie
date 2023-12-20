// import React from 'react';
// import './SpecificYoutubeVideo.css'; // Путь к вашему CSS-файлу
//
// const SpecificYoutubeVideo = () => {
//     return (
//         <div className="video-container">
//             <h1>Что рекомендуем посмотреть</h1>
//             <iframe
//                 title="Youtube"
//                 width="500"
//                 height="315"
//                 src="https://www.youtube.com/embed/qOFMcupD650"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//             ></iframe>
//         </div>
//     );
// };
//
// export default SpecificYoutubeVideo;
// import React from 'react';
//
import React from 'react';
import './SpecificYoutubeVideo.css'; // Путь к вашему CSS-файлу
const  SpecificYoutubeVideo = () => {
    return (
        <div>
            <div className="video-container1">
                <h1>Что рекомендуем посмотреть</h1>
                <iframe
                    title="Youtube"
                    width="500"
                    height="315"
                    src="https://www.youtube.com/embed/qOFMcupD650"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="video-container2">
                <iframe
                    title="Youtube"
                    width="500"
                    height="315"
                    src="https://www.youtube.com/embed/h94xXi8phIA"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default  SpecificYoutubeVideo;
