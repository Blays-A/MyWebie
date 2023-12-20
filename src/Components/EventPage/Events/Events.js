import React, {useState} from 'react';
import './Events.css';
import * as monthsData from "react-bootstrap/ElementChildren";
import SpecificYoutubeVideo from "../../SpecificYoutubeVideo/SpecificYoutubeVideo"; // Путь к вашему CSS-файлу для страницы мероприятий

const Events = () => {
    const [selectedMonth, setSelectedMonth] = useState(null);

    const months = [
        {
            name: 'Январь',
            events: [
                '14 СПИКНГ КАЗ 17.00 / АНГЛ 15.00',
                '21 СПИКНГ КАЗ 17.00 / АНГЛ 15.00',
                '21 MOCK TEST',
                '28 СПИКНГ КАЗ 17.00 / АНГЛ 15.00'
                // Добавьте другие события для Января
            ]
        },
        {
            name: 'Февраль',
            events: [
                '4 СПИКНГ КАЗ 17.00 / АНГЛ 15.00',
                '4 Medeu',
                '11 СПИКНГ КАЗ 17.00 / АНГЛ 15.00',
                '18 СПИКНГ КАЗ 17.00 / АНГЛ 15.00',
                '25 СПИКНГ КАЗ 17.00 / АНГЛ 15.00'
                // Добавьте другие события для Февраля
            ]
        },
        {
            name: 'Март',
            events: [
                '3 СПИКНГ КАЗ 17.00/ АНГЛ15.00',
                '10 СПИКНГ КАЗ 17.00/ АНГЛ15.00',
                '17 СПИКНГ КАЗ17.00 / АНГЛ15.00',
                '24 СПИКНГ КАЗ 17.00/ АНГЛ15.00',
                '31 СПИКНГ КАЗ 17.00/ АНГЛ15.00',
                '31 MOCK TEST'
            ]
        },
        {
            name: 'Апрель',
            events: [
                '7 СПИКНГ КАЗ 17.00/ АНГЛ15.00',
                '7 Basketball day',
                '14 СПИКНГ КАЗ 17.00/ АНГЛ15.00',
                '21 СПИКНГ КАЗ 17.00/ АНГЛ15.00',
                '28 СПИКНГ КАЗ17.00 / АНГЛ15.00',
                '28 MOCK TEST'
            ]
        },
        {
            name: 'Май',
            events: [
                '5 СПИКНГ КАЗ 17.00/ АНГЛ15.00',
                '12 СПИКНГ КАЗ 17.00/ АНГЛ15.00',
                '19 СПИКНГ КАЗ 17.00/ АНГЛ15.00',
                '19 MOCK TEST'
            ]
        }
        // Добавьте аналогичные объекты для остальных месяцев
    ];

    const handleMonthSelect = (index) => {
        setSelectedMonth(selectedMonth === index ? null : index);
    };

    return (
        <div>
            <div className="events-container" style={{ width: '600px', height: '488px', left: '142px', right: '634px' }}>
                <h1>BLAYS EVENTS SUMMER</h1>
                <p className="event-description1">Особая дружелюбная атмосфера - то, что нас отличает от других. Мы создаем комьюнити мечтателей и создателей.</p>
                <p className="event-description2">Каждое воскресенье мы проводим различные мероприятия для наших студентов.</p>
                <p className="event-description3">Здесь вы можете найти друзей по интересам, целям, начать участвовать в жизни компании и во всех мероприятиях для наших учеников и их друзей.</p>
            </div>

            <div className="image-box" style={{ width: '664px', height: '488px', left: '634px', right: '1298px' }}>
                <img src="/party.jpg" alt="Ваше изображение" className="event-image" />
            </div>

            <div className="dropdowns">
                {months.map((month, index) => (
                    <div key={index}>
                        <div className="month-name" onClick={() => handleMonthSelect(index)}>
                            {month.name}
                        </div>
                        {selectedMonth === index && (
                            <div className="events-list">
                                {month.events.map((event, eventIndex) => (
                                    <div key={eventIndex}>{event}</div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="second-box" style={{ width: '1160px', height: '107px', left: '140px', right: '1300px' }}>
                <p>Для записи на любое наше мероприятие вы можете обратиться в <a href="https://www.instagram.com/just_speak_it/ " target="_blank" rel="noopener noreferrer">Direct (Instagram)</a> или на Reception.</p>
            </div>
        </div>

    );

};

export default Events;
