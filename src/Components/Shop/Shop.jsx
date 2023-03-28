import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data) )
        
    }, []);
    
    useEffect(() => {
        const storedCart = getShoppingCart();
        console.log(storedCart);
    },[])
    
    const handleAddToCart = (product) =>{
        // cart.push(product); //evabe hobe na
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }
    
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)    
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
                {/* <h2>Order Summary</h2>
                <p>Selected Items: {cart.length}</p> */}
            </div>
        </div>
    );
};

export default Shop;