import React from 'react';
import './Elementarybox.css'
const ElementaryBox = () => {
    const boxStyle = {
        width: '1154px',
        height: '216px',
        position: 'absolute',
        top: '50%',
        left: '139px',
        right: '1293px',
        marginTop: '-170px',
        transform: 'translateY(-50%)',
        borderRadius  : '20px' ,
        // border: '1px solid #000', // Пример рамки для наглядности
        backgroundColor: 'rgb(255, 211, 105)',
    };


    return (
        <div>
        <div style={boxStyle}>
            <h1>ELEMENTARY</h1>
            <p>Расскажи о семье, что ты любишь и о своём лучшем друге!</p>
        </div>
            <div className={"general-box" }>
            <div className="elementary-box" id="box1">
                <img src="https://wearecloudworks.com/wp-content/uploads/2022/09/coworking-para-empresas-scaled.jpg" alt="Coworking" />
                <h1>Books</h1>
                <p>Книги "English File" в формате ".pdf" и Wordlist (список слов для заучивания)</p>
                <a href="https://drive.google.com/drive/folders/1M0MdOutg8p96fR3KDTN7ImAYAHlCPO3Y?_gl=1*1lpgtkt*_ga*MTM4NjMzMTczOS4xNjk1NDA1Mjg5*_ga_B2VNB1PVQC*MTcwMjc0NTI1NS4xOS4xLjE3MDI3NDg5MTcuNTguMC4w" target="_blank" rel="noopener noreferrer">
                    <button>Перейти</button>
                </a>
            </div>
            <div className="elementary-box" id="box2">
                <img src='https://wowbonkoskihome.files.wordpress.com/2019/01/screenshot-2019-01-27-at-5.07.13-pm.png' alt='Studying'/>
                <h1>Audio</h1>
                <p>Аудио-материалы по учебнику "English File"</p>
                <a href="https://cloud.mail.ru/public/4wVb/4tQxjWm42" target="_blank" rel="noopener noreferrer">
                    <button>Перейти</button>
                </a>
            </div>
            <div className="elementary-box" id="box3">
                <img src='https://www.shutterstock.com/image-photo/portrait-little-girl-wireless-headset-600nw-2074607506.jpg' alt='Studying'/>
                <h1>Reader</h1>
                <p>Книги на английском языке, адаптированные под твой уровень.</p>
                <a href="https://cloud.mail.ru/public/5dyE/k443Jn25n" target="_blank" rel="noopener noreferrer">
                    <button>Перейти</button>
                </a>
            </div>
            <div className="elementary-box" id="box4">
                <img src='https://a.cdn-hotels.com/gdcs/production7/d1107/d9e0e923-6c18-447b-b95f-57ad99e0658a.jpg?impolicy=fcrop&w=800&h=533&q=medium' alt='Studying'/>
                <h1>Oxford 4</h1>
                <p>Официальный сайт Oxford "English File" – для дополнительных материалов по учебнику English File.</p>
                <a href="https://elt.oup.com/student/englishfile/elementary3/?cc=ee&selLanguage=en&_gl=1*rbe0p0*_ga*MTM4NjMzMTczOS4xNjk1NDA1Mjg5*_ga_B2VNB1PVQC*MTcwMjc1MzM1OS4yMC4wLjE3MDI3NTMzNjMuNTYuMC4w" target="_blank" rel="noopener noreferrer">
                    <button>Перейти</button>
                </a>
            </div>
        </div>
        </div>

    );
};

export default ElementaryBox;
