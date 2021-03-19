import React, {useEffect} from 'react';
import ProductCard from './ProductCard';
import {data} from '../db';
const ProductList = () => {

    console.log(data);

    return (
        <div>
           

        {data ?
         data.map(params => <ProductCard params={params}/> ) 
        : <p>No Products ! :(</p> }    
            
        </div>
    )
}

export default ProductList;