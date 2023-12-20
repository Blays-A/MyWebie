import React from 'react';
import './Subscription.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Подключаем Bootstrap


const SubscriptionInfo = () => {
    return (
        <div className="container">
            <div className="row subscription-info">
                <div className="col left-col">
                    <h2>Абонемент на год</h2>
                    <p>144 групповых занятий по 60 минут</p>
                    <p>3 гостевых визита</p>
                    <p>3 замороженных занятия</p>
                    <p>5000 бонусов на карту лояльности</p>
                    <p>7% кэшбек на последующие оплаты</p>
                    <p>Гарантия на получение сертификата</p>
                    <p>Приоритетное место на мероприятиях</p>
                    <p>3 гостевых визита на мероприятия</p>
                </div>

                <div className="col center-col">
                    <h2>БЕСПЛАТНО</h2>
                    <p>3 комплекта Student's book</p>
                    <p>3 комплекта Workbook</p>
                    <p>3 комплекта Wordlist</p>
                    <p>5 полезных PDF</p>
                    <p>Посещение всех разговорных клубов</p>
                    <p>100 гб полезной информации</p>
                </div>
                <div className="col right-col">
                    <img src="/Kaspired.png" alt="Kaspired" />
                    <h2>Купи сегодня за</h2>
                    <p className="price">199 000 ₸</p>
                    <button className="btn btn-primary">Подать заявку</button>
                </div>

            </div>
        </div>
    );
};

export default SubscriptionInfo;
