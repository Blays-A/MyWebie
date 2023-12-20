// RegistrationForm.js
import React from 'react';
import './RegistrationForm.css'

const RegistrationForm = () => {
    return (
        <div className="registration-form">
            <h2>Запись на учебу</h2>
            <form>
                {}
                <div>
                    <label htmlFor="nameInput">Введите ваше имя:</label>
                    <input type="text" id="nameInput" name="name" />
                </div>

                {/* Форма для ввода номера телефона */}
                <div>
                    <label htmlFor="phoneInput">Введите ваш номер телефона (начиная с +7):</label>
                    <input type="tel" id="phoneInput" name="phone" pattern="^\+7" title="Номер телефона должен начинаться с +7" required />
                </div>


                {/* Форма для выбора района проживания */}
                <div className={"rig"}>
                    <label htmlFor="districtSelect">Выберите район проживания:</label>
                    <select id="districtSelect" name="district">
                        <option value="Алатауский">Алатауский</option>
                        <option value="Алмалинский">Алмалинский</option>
                        <option value="Ауэзовский">Ауэзовский</option>
                        <option value="Бостандыкский">Бостандыкский</option>
                        <option value="Жетысуский">Жетысуский</option>
                        <option value="Медеуский">Медеуский</option>
                        <option value="Наурызбайский">Наурызбайский</option>
                        <option value="Турксибский">Турксибский</option>
                    </select>
                </div>

                {/* Дополнительный текст */}
                <p>Лучшая школа иностранных языков в Казахстане</p>

                {/* Кнопка для отправки формы */}
                <button className="reg-but" cla type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default RegistrationForm;