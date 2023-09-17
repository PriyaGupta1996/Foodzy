import React from 'react';
import ReactDOM from 'react-dom';
import cart from "./images/cart-icon-28356.png";
import logo from "./images/foodlogo.jpg"
import "./index.css"


const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className="logo" src={logo} alt="food_logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li><img className="cart" src={cart} alt="cart" /></li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)

