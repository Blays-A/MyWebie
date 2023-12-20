import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Контакты</h1>

            <section className="branch-contacts">
                <div className="branch">
                    <h2>Филиал в центре города</h2>
                    <p><strong>Адрес:</strong> ул. Центральная, 123, г. Название, Почтовый индекс</p>
                    <p><strong>Телефон:</strong> +7 123 456 789</p>
                    <p><strong>Email:</strong> central@blayslang.com</p>
                </div>

                <div className="branch">
                    <h2>Филиал на севере города</h2>
                    <p><strong>Адрес:</strong> ул. Северная, 456, г. Название, Почтовый индекс</p>
                    <p><strong>Телефон:</strong> +7 987 654 321</p>
                    <p><strong>Email:</strong> north@blayslang.com</p>
                </div>

                <div className="branch">
                    <h2>Филиал на юге города</h2>
                    <p><strong>Адрес:</strong> ул. Южная, 789, г. Название, Почтовый индекс</p>
                    <p><strong>Телефон:</strong> +7 111 222 333</p>
                    <p><strong>Email:</strong> south@blayslang.com</p>
                </div>

                <div className="branch">
                    <h2>Филиал на западе города</h2>
                    <p><strong>Адрес:</strong> ул. Западная, 101, г. Название, Почтовый индекс</p>
                    <p><strong>Телефон:</strong> +7 444 555 666</p>
                    <p><strong>Email:</strong> west@blayslang.com</p>
                </div>

                {/* Можно добавить еще филиалы */}
            </section>
        </div>
    );
};

export default Contact;
