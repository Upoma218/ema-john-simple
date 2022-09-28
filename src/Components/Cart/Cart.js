import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Cart.css"

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax; 
    return (
        <div className="card-container">
          <p className='title'> Order Summary</p>
          <div className='order-details'>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping Charge: {shipping}</p>
            <p>Tax: ${tax}</p>
          </div>
           <p className='total'>Grand Total: ${grandTotal}</p>
           <button className='btn-clear'>Clear Cart
        <FontAwesomeIcon className='trash-icon' icon={faTrashCan}></FontAwesomeIcon>
           </button>
           <br />
           <button className='btn-order'>Review Order
           <FontAwesomeIcon className='arrow-icon' icon={faArrowRight}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Cart;