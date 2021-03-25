import React from 'react';
import {data} from '../DB/categories.js';
import {Link} from 'react-router-dom';

const CategoryList = () => {


    return (

      data ? data.map(data => {
          return(<li className='category-items'><Link to={'/' + data.category_name}>{data.category_name}</Link></li>)
        })
      : <p className='category-items'>Categories not found ! :(</p>
     
    )
}

export default CategoryList;