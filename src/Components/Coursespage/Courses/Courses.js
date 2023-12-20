import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Courses.css'; // Подключаем файл стилей для компонента Courses
import 'bootstrap/dist/css/bootstrap.min.css'; // Импорт стилей CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Courses = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState({
        name: '',
        description: '',
        price: ''
    });

    const handleShowModal = (name, description, price) => {
        setSelectedLanguage({ name, description, price });
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="center-content">
                        <h1 className="course-heading">Наши языки</h1>
                        {/* Таблица с курсами */}
                        <table className="table table-bordered table-hover custom-table">
                            <caption>Курсы по изучению языков</caption>
                            <thead className="thead-dark">
                            <tr>
                                <th>Язык</th>
                                <th>Описание</th>
                                <th>Цена</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr onClick={() => handleShowModal('Английский', 'Основной язык общения в мире бизнеса, технологий и культуры.', '20000 тенге')}>
                                <td>Английский</td>
                                <td>Основной язык общения в мире бизнеса, технологий и культуры.</td>
                                <td>20000 тенге</td>
                            </tr>
                            <tr onClick={() => handleShowModal('Испанский', 'Язык, распространенный во многих странах и часто используемый в международных отношениях.', '15000 тенге')}>
                                <td>Испанский</td>
                                <td>Язык, распространенный во многих странах и часто используемый в международных отношениях.</td>
                                <td>15000 тенге</td>
                            </tr>
                            <tr onClick={() => handleShowModal('Французский', 'Язык любви, культуры и высокой моды, открытие для изучения многих культур.', '15000 тенге')}>
                                <td>Французский</td>
                                <td>Язык любви, культуры и высокой моды, открытие для изучения многих культур.</td>
                                <td>15000 тенге</td>
                            </tr>
                            <tr onClick={() => handleShowModal('Казахский', 'Носитель этого языка — Казахстан, где проживает множество различных народов.', '17500 тенге')}>
                                <td>Казахский</td>
                                <td>Носитель этого языка — Казахстан, где проживает множество различных народов.</td>
                                <td>17500 тенге</td>
                            </tr>
                            <tr onClick={() => handleShowModal('Турецкий', 'Язык Турции, богатый историей и культурой.', '15000 тенге')}>
                                <td>Турецкий</td>
                                <td>Язык Турции, богатый историей и культурой.</td>
                                <td>15000 тенге</td>
                            </tr>
                            {/* Добавьте обработчики событий для остальных строк */}
                            {/* ... */}
                            </tbody>
                        </table>

                        {/* Модальное окно */}
                        <Modal show={showModal} onHide={handleCloseModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>{selectedLanguage.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>{selectedLanguage.description}</p>
                                <p>Цена: {selectedLanguage.price}</p>
                                {/* Другая информация */}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseModal}>
                                    Закрыть
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;