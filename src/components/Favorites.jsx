import React from 'react'
import ALL_PRODUCTS from '../data'
import Product from './Product';
import { Link } from 'react-router-dom';

const Favorites = ({ like, toggleLike, cart, increase, decrease, addToCart, clearFavorites }) => {
    const likeItems = ALL_PRODUCTS.map(product => {
        if (!like.includes(product.index)) return null;

        return {
            ...product,
            count: cart[product.index] || 0,
            priceNum: product.price
        };
    }).filter(Boolean);

    // Удаление
    const deleteAll = () => {
        clearFavorites()
    }

    // если нет товаров в избранном 
    if (likeItems.length === 0) {
        return (
            <div className="section">
                <div className="cart__content">
                    <h1>Favorites</h1>
                    <div className="cart__content-btns favorite-btns">
                        <button className='product__btn favorite-btn' onClick={deleteAll}>remove all</button>
                    </div>
                </div>
                <div className='empty'>
                    <img src="../../public/img/favorite-empty.png" alt="Корзина пуста" />
                    <h2><span> The favorites page is empty for now </span></h2>
                    <p>Check out the main page — we've collected some products that you might like</p>
                    <Link to="/"><button className='product__btn'>Shopping</button></Link>
                </div>
            </div>
        )
    }

    return (
        <div className='section cart favorite'>
            <div className="cart__content">
                <h1>Favorites</h1>
                <div className="cart__content-btns  favorite-btns">
                    <button className='product__btn favorite-btn' onClick={deleteAll}>remove all</button>
                </div>
            </div>
            <div className='product__cards'>
                {likeItems.map(product => (
                    <Product
                        key={product.index}
                        product={product}
                        addToCart={addToCart}
                        increase={() => increase(product.index)}
                        decrease={() => decrease(product.index)}
                        toggleLike={toggleLike}
                        isLiked={true}
                    />
                ))}
            </div>
        </div>
    );
};

export default Favorites
