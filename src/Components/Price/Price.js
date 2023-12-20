import React, { useState } from 'react';
import './Price.css'; // Импортируйте стили для компонента Price

const Price = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleApplyClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Добавьте здесь код для обработки отправки формы
        console.log('Отправлено:', name, phone);
        setIsModalOpen(false);
    };


    return (
            <div className="container">
                <div className="info-box gray-bg">
                    <p className="small-font">Стоимость обучения</p>
                    <h1>Индивидуальные занятия</h1>
                    <p className="small-font">Занятия проходят индивидуально с преподавателем</p>
                    <h1>50 000 ₸ в месяц</h1>
                    <hr/>
                    <p>13 занятий по 60 минут</p>
                    <hr/>
                    <p>Карта лояльности</p>
                    <hr/>
                    <p>Еженедельный Speaking Club</p>
                    <hr/>
                    <p>Премьеры фильмов на английском в Esentai Mal</p>
                    <hr/>
                    <p>Отработка пропущенных занятий в других филиалах</p>
                    <hr/>
                    <p>Бесплатный Mock test IELTS каждое воскресенье</p>
                    <hr/>
                    <p>JSI PARTY с известными артистами и другие мероприятия</p>
                    <hr/>
                    <p>Бесплатный клуб казахского языка</p>
                    <div className="apply-button-container">
                        <hr/>
                        <button className="apply-button" onClick={handleApplyClick}>Подать заявку</button>
                    </div>
                </div>
                <div className="info-box gray-bg with-border">
                    <p className="small-font">Стоимость обучения</p>
                    <h1>Групповые занятия</h1>
                    <p className="small-font">Занятия в небольших группах от 3 до 12 человек.</p>
                    <h1>19500 ₸ в месяц</h1>
                    <hr/>
                    <p>13 занятий по 60 минут</p>
                    <hr/>
                    <p>Карта лояльности</p>
                    <hr/>
                    <p>Еженедельный Speaking Club</p>
                    <hr/>
                    <p>Премьеры фильмов на английском в Esentai Mal</p>
                    <hr/>
                    <p>Отработка пропущенных занятий в других филиалах</p>
                    <hr/>
                    <p>Бесплатный Mock test IELTS каждое воскресенье</p>
                    <hr/>
                    <p>JSI PARTY с известными артистами и другие мероприятия</p>
                    <hr/>
                    <p>Бесплатный клуб казахского языка</p>
                    <div className="apply-button-container">
                        <hr/>
                        <button className="apply-button" onClick={handleApplyClick}>Подать заявку</button>
                    </div>
                </div>
                <div className="info-box gray-bg">
                    <p className="small-font">Стоимость обучения</p>
                    <h1>Интенсивные занятия</h1>
                    <p className="small-font">Занятия в группе, либо индивидуально. Изучается два уровня сразу.</p>
                    <h1> 39 000 ₸ месяц</h1>
                    <hr/>
                    <p>13 занятий по 120 минут
                        /26 занятий по 60 минут</p>
                    <hr/>
                    <p>Карта лояльности</p>
                    <hr/>
                    <p>Еженедельный Speaking Club</p>
                    <hr/>
                    <p>Премьеры фильмов на английском в Esentai Mal</p>
                    <hr/>
                    <p>Отработка пропущенных занятий в других филиалах</p>
                    <hr/>
                    <p>Бесплатный Mock test IELTS каждое воскресенье</p>
                    <hr/>
                    <p>JSI PARTY с известными артистами и другие мероприятия</p>
                    <hr/>
                    <p>Бесплатный клуб казахского языка</p>
                    <div className="apply-button-container">
                        <hr/>
                        <button className="apply-button" onClick={handleApplyClick}>Подать заявку</button>
                    </div>

                </div>
                <div className={`modal ${isModalOpen ? 'show' : ''}`}>
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <h2>Оставьте заявку</h2>
                        <form onSubmit={handleFormSubmit}>
                            <input type="text" placeholder="Имя" value={name} onChange={handleNameChange} />
                            <input type="tel" placeholder="Номер телефона" value={phone} onChange={handlePhoneChange} />
                            <button  className={"price_mb"} type="submit">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    };



export default Price;
