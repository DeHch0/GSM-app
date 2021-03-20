import React from 'react';
import './style.css'
import {Link} from 'react-router-dom';

const ProductCard = ({ params }) => {


    console.log(params);
    return (
        params !== 'undefined' ?
            <div className='product-card'>

                    <img className='product-image' src={params.imageUrl} alt="Image" />
                    <p className='product-brand'>{params.brand} {params.model}</p>
                    <Link to={`product/` + params.id}><button className='product-view'>Детайли</button></Link>
                    <button className='product-price'>{params.price} лв.</button>
               
                
            </div>
            : <p>Product not found :(</p>
    )
}

export default ProductCard;