import React from 'react';
import './style.css'
import {
    Link
} from 'react-router-dom';

import {Helmet} from 'react-helmet';
const Header = () => {

    return (
        
        <div className="nav">
            <Helmet>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Helmet>
    <ul className="nav-list">
        <li className="nav-item"><Link to='/'>Начало</Link></li>
        <li className="nav-item"><Link to='/login'>Вход</Link></li>
        <li className="nav-item"><Link to='/register'>Регистрация</Link></li>
        <span className='search'>
        <input className='search-bar' type="text" placeholder="Търсене"></input>
        <button className='search-button'><i class="fa fa-search"></i></button>
        </span>
        
    </ul>
</div>
        )
}

export default Header;