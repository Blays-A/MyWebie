// работает
// import React, { useState } from "react";
// import { Course } from "./CourseActionff";
// import "./AvailableCourses.css"; // Импорт CSS файла
//
// interface AvailableCoursesProps {
//     courses: Course[];
//     buyCourse: (course: Course) => void;
//     addCourseToLocalStorage: (course: Course) => void; // Добавлен пропс для добавления курса в localStorage
// }
//
// const AvailableCourses: React.FC<AvailableCoursesProps> = ({ courses, buyCourse, addCourseToLocalStorage }) => {
//     const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [purchaseInfo, setPurchaseInfo] = useState({
//         name: "",
//         email: "",
//         paymentMethod: ""
//     });
//
//     // Обработчик покупки курса
//     const handleBuyCourse = (course: Course) => {
//         setSelectedCourse(course);
//         setIsModalOpen(true);
//     };
//
//     // Обработчик подтверждения покупки курса
//     const handleConfirmPurchase = () => {
//         if (selectedCourse && buyCourse) {
//             if (purchaseInfo.name && purchaseInfo.email && purchaseInfo.paymentMethod) {
//                 buyCourse(selectedCourse);
//                 addCourseToLocalStorage(selectedCourse); // Вызываем функцию для добавления курса в localStorage
//                 setIsModalOpen(false);
//             } else {
//                 alert("Пожалуйста, заполните все поля для покупки курса.");
//             }
//         }
//     };
//
//     const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         const { name, value } = e.target;
//         setPurchaseInfo({
//             ...purchaseInfo,
//             [name]: value
//         });
//     };
//
//     // Обработчик изменения полей ввода
//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setPurchaseInfo({
//             ...purchaseInfo,
//             [name]: value
//         });
//     };
//
//     return (
//         <div className="available-courses-container"> {/* Применение класса из CSS файла */}
//             <h2>Доступные курсы</h2>
//             <ul>
//                 {courses.map((course) => (
//                     <li key={course.id}>
//                         <h3>{course.title}</h3>
//                         <p>Язык: {course.language}</p>
//                         <p>Цена: ${course.price}</p>
//                         <button onClick={() => handleBuyCourse(course)}>Купить</button>
//                     </li>
//                 ))}
//             </ul>
//             {selectedCourse && isModalOpen && (
//                 <div className="modal-overlay">
//                     <div className="modal">
//                         <h2>Введите данные для покупки</h2>
//                         <input type="text" name="name" placeholder="Ваше имя" value={purchaseInfo.name} onChange={handleInputChange} required />
//                         <input type="email" name="email" placeholder="Email" value={purchaseInfo.email} onChange={handleInputChange} required />
//                         <select name="paymentMethod" value={purchaseInfo.paymentMethod} onChange={(e) => handleSelectChange(e)} required>
//                             <option value="">Выберите метод оплаты</option>
//                             <option value="creditCard">Кредитная карта</option>
//                             <option value="paypal">PayPal</option>
//                             <option value="bankTransfer">Банковский перевод</option>
//                             {/* Добавьте другие методы оплаты по мере необходимости */}
//                         </select>
//
//
//                         <button onClick={handleConfirmPurchase}>Подтвердить</button>
//                         <button onClick={() => setIsModalOpen(false)}>Отмена</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };
// export const sampleCourses: Course[] = [
//     { id: 1, title: "Английский", language: "английский", price: 100 },
//     { id: 2, title: "Французский", language: "французский", price: 120 },
//     { id: 3, title: "Испанский", language: "испанский", price: 110 },
//     { id: 4, title: "Немецкий", language: "немецкий", price: 130 },
//     { id: 5, title: "Итальянский", language: "итальянский", price: 115 },
//     { id: 6, title: "Португальский", language: "португальский", price: null } // Курс находится в разработке
// ];
//
// export default AvailableCourses;


import React, { useState } from "react";
import { Course } from "./CourseActionff";
import "./AvailableCourses.css"; // Импорт CSS файла

interface AvailableCoursesProps {
    courses: Course[];
    buyCourse: (course: Course) => void;
    addCourseToLocalStorage: (course: Course) => void; // Добавлен пропс для добавления курса в localStorage
}

const AvailableCourses: React.FC<AvailableCoursesProps> = ({ courses, buyCourse, addCourseToLocalStorage }) => {
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [purchaseInfo, setPurchaseInfo] = useState({
        name: "",
        email: "",
        paymentMethod: ""
    });

    // Обработчик покупки курса
    const handleBuyCourse = (course: Course) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    // Обработчик подтверждения покупки курса
    const handleConfirmPurchase = () => {
        if (selectedCourse && buyCourse) {
            if (purchaseInfo.name && purchaseInfo.email && purchaseInfo.paymentMethod) {
                buyCourse(selectedCourse);
                addCourseToLocalStorage(selectedCourse); // Вызываем функцию для добавления курса в localStorage
                setIsModalOpen(false);
            } else {
                alert("Пожалуйста, заполните все поля для покупки курса.");
            }
        }
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setPurchaseInfo({
            ...purchaseInfo,
            [name]: value
        });
    };

    // Обработчик изменения полей ввода
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPurchaseInfo({
            ...purchaseInfo,
            [name]: value
        });
    };

    return (
        <div className="available-courses-container"> {/* Применение класса из CSS файла */}
            <h2>Доступные курсы</h2>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        <h3>{course.title}</h3>
                        <p>Язык: {course.language}</p>
                        <p>Цена: ${course.price}</p>
                        <button onClick={() => handleBuyCourse(course)}>Купить</button>
                    </li>
                ))}
            </ul>
            {selectedCourse && isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Введите данные для покупки</h2>
                        <input type="text" name="name" placeholder="Ваше имя" value={purchaseInfo.name} onChange={handleInputChange} required />
                        <input type="email" name="email" placeholder="Email" value={purchaseInfo.email} onChange={handleInputChange} required />
                        <select name="paymentMethod" value={purchaseInfo.paymentMethod} onChange={(e) => handleSelectChange(e)} required>
                            <option value="">Выберите метод оплаты</option>
                            <option value="creditCard">Кредитная карта</option>
                            <option value="paypal">PayPal</option>
                            <option value="bankTransfer">Банковский перевод</option>
                            {/* Добавьте другие методы оплаты по мере необходимости */}
                        </select>


                        <button onClick={handleConfirmPurchase}>Подтвердить</button>
                        <button onClick={() => setIsModalOpen(false)}>Отмена</button>
                    </div>
                </div>
            )}
        </div>
    );
};
export const sampleCourses: Course[] = [
    { id: 1, title: "Английский", language: "английский", price: 100 },
    { id: 2, title: "Французский", language: "французский", price: 120 },
    { id: 3, title: "Испанский", language: "испанский", price: 110 },
    { id: 4, title: "Немецкий", language: "немецкий", price: 130 },
    { id: 5, title: "Итальянский", language: "итальянский", price: 115 },
    { id: 6, title: "Португальский", language: "португальский", price: null } // Курс находится в разработке
];

export default AvailableCourses;