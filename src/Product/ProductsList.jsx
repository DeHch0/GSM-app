import React, {useEffect} from 'react';
import ProductCard from './ProductCard';
import {data} from '../DB/products.js';
import './style.css';
const ProductList = () => {

    return (
        <div className='product-list'>
           

        {data ?
         data.map(params => <ProductCard params={params}/> ) 
        : <p>No Products ! :(</p> }    
            
        </div>
    )
}

export default ProductList;