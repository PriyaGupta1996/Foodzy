import React from 'react';
import ReactDOM from 'react-dom';
import cart from "./images/cart-icon-28356.png";
import logo from "./images/foodlogo.jpg"
import idc from "./images/idc.jpg"
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

const RestaurantCard = () => {
    return (
        <div className="restaurant-card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c9b36413c755d072ec34619ee585bef4" alt="thatte-idli" />
            <h3>IDC</h3>
            <h4>South Indian, Desserts, North Indian</h4>
            <h4>4.4 star</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className="search">
                Search
            </div>
            <div className='restaurant-card-container'>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>

        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)

