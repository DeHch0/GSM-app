import React from 'react';

const ProductCard = ({params}) => {


    console.log(params);
    return (
       params !== 'undefined' ?
        <div className='product-card'>
            <p>{params._id}</p>
            <p>{params.brand}</p>
            <p>{params.model}</p>
            <p>{params.imageUrl}</p>
            <p>{params.price}</p>
        </div>
        : <p>Product not found :(</p>
    )
}

export default ProductCard;