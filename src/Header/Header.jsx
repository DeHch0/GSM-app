import React from 'react';
import {
    Link
} from 'react-router-dom';
const Header = () => {

    return (

        <div className="nav">
    <ul className="nav-list">
        <li className="nav-item"><Link to='/'>Home</Link></li>
        <li className="nav-item"><Link to='/login'>Login</Link></li>
    </ul>
</div>
        )
}

export default Header;