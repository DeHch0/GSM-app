import React from 'react';
import ProductCard from './ProductCard';
import {data} from '../db';
const ProductList = () => {

    console.log(data);
    return (
        <div>
            {/* {data ? data.map(elm => {
                <div>

                <h1>opalq</h1>
                <ProductCard params={elm}/>
                </div>
            } ) : null } */}

            
            
        </div>
    )
}

export default ProductList;