import React from 'react';
import './SchoolInfoBox.css'
const SchoolInfoBox = () => {
    return (
        <div>
            <div className={"general-bo"}>
            <div className="box12">
                <h1>Учителя JSI</h1>
                <p>Наши преподаватели знают как мотивировать на достижение цели и помогут освоить английский быстрее</p>
                <img src=" https://www.digis.kz/upload/iblock/ccb/7yx12tumbhjvjf6al17fl3ekqohibulr/оснащение_школьного_кабинета_английского_языка_под_ключ_алматы.jpg" alt="Coworking" />
            </div>
            <div className="box22">
                <img src="https://as1.ftcdn.net/v2/jpg/03/61/64/06/1000_F_361640617_iqVbyohwrM0HmOb8mzI84xuWEUYv1FeZ.jpg" alt="pictue" />
                <p className="name1">Mr.Qwentin </p>
                <p className="education">ОБРАЗОВАНИЕ</p>
                <p className="education-place">Университет Лион I Клода</p>
                <p className='desire'>На своих уроках я создаю атмосферу, в которой людям комфортно начать говорить на английском языке. Моя мотивация - видеть прогресс моих студентов.</p>
            </div>
            <div className="box32">
                <img src="https://s3.envato.com/files/342276497/574_1R3A0978.jpg" alt="Coworking" />
                <p className="name1">Mr.Hasan </p>
                <p className="education">ОБРАЗОВАНИЕ</p>
                <p className="education-place">АРГУ. Факультет иностранных языков</p>
                <p className='desire'>Приглашаю вас к себе на урок. Будет очень много интересных фактов и истории об изучении английского языка. Уроки с юмором и приколами и с огромным позитивом ждут вас</p>
            </div>
            <div className="box42">
                <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzmMVyrUWhGCDWAprFqRURHtdPggU9eTBjg&usqp=CAU" alt="Coworking" />
                <p className="name1">Mr.Lie </p>
                <p className="education">ОБРАЗОВАНИЕ</p>
                <p className="education-place">МУИТ</p>
                <p className='desire'>Объясняю материал на понятном языке и без скучной зубрежки - легкотня. Мы словим один Vibe в процессе и будем best buddies по английскому)</p>
            </div>

            </div>
        </div>
    );
};

export default SchoolInfoBox;