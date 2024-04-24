// import React, { useState } from 'react'
// import { FaShoppingCart } from "react-icons/fa";
// import { TbBrandAmongUs } from "react-icons/tb";
// // import { Link } from 'react-router-dom';
// import Order from './Order';
//
// const showOrders = (props)=> {
//     let summa = 0
//     props.orders.forEach(el => summa += Number.parseFloat(el.price))
//     return (<div>
//         {props.orders.map(el=> (
//             <Order onDelete={props.onDelete} key={el.id} item={el} />
//         ))}
//         <p className='summa'>total: {new Intl.NumberFormat().format(summa)}$</p>
//     </div>)
// }
// const showNothing= () =>{
//     return (<div className='empty'>
//         <h2>You don't have item in the cart</h2>
//     </div>)
// }
//
// export default function Header(props) {
//     let[cartOpen, setCartOpen] = useState(false)
//
//     return (
//         <header>
//             <div>
//                 <span className='logo'>AEKI</span>
//                 <TbBrandAmongUs className='logo-icons'/>
//                 <ul className='nav'>
//                     <li><Link to="/">Главная</Link></li>
//                     <li><Link to="/stories">Stories</Link></li>
//                     <li><Link to="/news">News</Link></li>
//                     <li><Link to="/profile">Profile</Link></li>
//                 </ul>
//                 <FaShoppingCart onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={shop-cart-button ${cartOpen && 'active'}}/>
//
//                 {cartOpen && (
//                     <div className='shop-cart'>
//                         {props.orders.length > 0 ?
//                             showOrders(props) : showNothing()}
//                     </div>
//                 )}
//             </div>
//             <div className='presentation'></div>
//         </header>
//     )
// }