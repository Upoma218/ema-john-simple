import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Product.css"

const Product = ({product, handleAddToCart}) => {
    const {img, name, seller, price, ratings,} = product;
    return (
        <div className='product'>
            <img onError={(e) => e.target.setAttribute('src','https://th.bing.com/th/id/OIP.9bwqdMGqOXcamyjFfZJt1wHaHa?pid=ImgDet&rs=1')} src={img} alt="" />
            <div>
               <p className='product-name'>{name}
               </p>
               <p className='product-price'>Price: ${price}</p>
               <div className='short-info'>
                   <p>Manufacture: {seller}</p>
                    <p>Ratings: {ratings}</p>
               </div>
                
            </div>
            <button onClick={() => handleAddToCart(product)}>Add to cart
            <FontAwesomeIcon className='cart-icon' icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;