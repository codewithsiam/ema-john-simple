import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // option 2
// const Cart = ({carts}) => {
    const {cart} = props;
    // option 3 
    // const cart = props.cart;
    
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart){
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // second method / shortcut
        product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
;    }
    const tax = totalPrice * 7 / 100 ;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: {totalShipping}</p>
            <p>tax: {tax.toFixed(2)}</p>
            <h3>Grand Total: {grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;