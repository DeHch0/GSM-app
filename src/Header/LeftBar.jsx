import React from 'react';
import './left-bar.css';
import {Link} from 'react-router-dom';
import CategoryList from '../Category/CategoryList';
const LeftBar = () => {

    return (

        <div className='left-bar'>
        <ul className='category-list'>

            <CategoryList/>
            {/* <li className='category-items'><Link to=''>{'>'} Компютри {'<'}</Link></li>
            <li className='category-items'><Link to=''>Телефони</Link></li>
            <li className='category-items'><Link to=''>Телевизори</Link></li>
            <li className='category-items'><Link to=''>Слушалки</Link></li> */}
        </ul>
    </div>
        )


}

export default LeftBar;