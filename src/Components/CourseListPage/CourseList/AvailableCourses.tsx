// работает
// import React, { useState } from "react";
// import { Course } from "./CourseActionff";
// import "./AvailableCourses.css"; // Импорт CSS файла
//
// interface AvailableCoursesProps {
//     courses: Course[];
//     buyCourse: (course: Course) => void;
// }
//
// const AvailableCourses: React.FC<AvailableCoursesProps> = ({ courses, buyCourse }) => {
//     const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [purchaseInfo, setPurchaseInfo] = useState({
//         name: "",
//         email: "",
//         paymentMethod: ""
//     });
//
//     const handleBuyCourse = (course: Course) => {
//         setSelectedCourse(course);
//         setIsModalOpen(true);
//     };
//
//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//     };
//
//     const handleConfirmPurchase = () => {
//         if (selectedCourse && buyCourse) {
//             // Проверяем, все ли поля заполнены
//             if (purchaseInfo.name && purchaseInfo.email && purchaseInfo.paymentMethod) {
//                 buyCourse(selectedCourse);
//                 console.log("Курс куплен:", selectedCourse); // Проверка вызова функции
//                 setIsModalOpen(false);
//             } else {
//                 // Если не все поля заполнены, выводим сообщение об ошибке
//                 alert("Пожалуйста, заполните все поля для покупки курса.");
//             }
//         }
//     };
//
//
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
//                         <input type="text" name="paymentMethod" placeholder="Метод оплаты" value={purchaseInfo.paymentMethod} onChange={handleInputChange} required />
//                         <button onClick={handleConfirmPurchase}>Подтвердить</button>
//                         <button onClick={handleCloseModal}>Отмена</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };
//
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

// бета
import React, { useState } from "react";
import { Course } from "./CourseActionff";
import "./AvailableCourses.css"; // Импорт CSS файла

interface AvailableCoursesProps {
    courses: Course[];
    buyCourse: (course: Course) => void;
}

const AvailableCourses: React.FC<AvailableCoursesProps> = ({ courses, buyCourse }) => {
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [purchaseInfo, setPurchaseInfo] = useState({
        name: "",
        email: "",
        paymentMethod: ""
    });

    const handleBuyCourse = (course: Course) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirmPurchase = () => {
        if (selectedCourse && buyCourse) {
            // Проверяем, все ли поля заполнены
            if (purchaseInfo.name && purchaseInfo.email && purchaseInfo.paymentMethod) {
                buyCourse(selectedCourse);
                console.log("Курс куплен:", selectedCourse); // Проверка вызова функции
                setIsModalOpen(false);
            } else {
                // Если не все поля заполнены, выводим сообщение об ошибке
                alert("Пожалуйста, заполните все поля для покупки курса.");
            }
        }
    };


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
                        <input type="text" name="paymentMethod" placeholder="Метод оплаты" value={purchaseInfo.paymentMethod} onChange={handleInputChange} required />
                        <button onClick={handleConfirmPurchase}>Подтвердить</button>
                        <button onClick={handleCloseModal}>Отмена</button>
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
