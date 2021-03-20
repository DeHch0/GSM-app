import React, {useEffect} from 'react';
import ProductCard from './ProductCard';
import {data} from '../db';
import './style.css';
const ProductList = () => {

    console.log(data);

    return (
        <div className='products-list'>
           

        {data ?
         data.map(params => <ProductCard params={params}/> ) 
        : <p>No Products ! :(</p> }    
            
        </div>
    )
}

export default ProductList;