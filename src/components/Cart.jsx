import React, { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import { Link, NavLink } from 'react-router-dom';
import Count from './Count';
import ALL_PRODUCTS from '../data';
import Product from './Product';

const Cart = ({ cart, increase, decrease, clearCart, removeItems, toggleLike, like }) => {

  const [selectedId, setSelectedId] = useState([])

  // ВЫВОД ТОВАРОВ
  // Превращаем объект корзины в массив товаров для отображения
  const cartItems = Object.entries(cart)
    .map(([index, count]) => {
      const product = ALL_PRODUCTS.find(p => p.index === index);
      if (!product) return null;
      return {
        ...product,
        count,
        priceNum: product.price // предполагаем, что price уже число
      };
    })
    .filter(item => item !== null);
  // мы перебираем все записи объекта Object.entries(cart). Каждая запись – это [index, count]. Для каждого index мы находим
  // полную информацию о товаре из ALL_PRODUCTS (наш список всех товаров). Затем создаём новый объект, добавляя поле count
  // и преобразованную числовую цену.

  // ЕСЛИ КОРЗИНА ПУСТА
  if (cartItems.length === 0) {
    return (
      <div className="section">
        <div className="cart__content">
          <h1>Cart</h1>
          <div className="cart__content-btns">
            <button className='product__btn'>delete selected ones</button>
            <button className='product__btn'>delete all products</button>
          </div>
        </div>
        <div className='empty'>
          <img src="../../public/img/cart-empty.png" alt="Корзина пуста" />
          <h2><span> The shopping cart is empty for now </span></h2>
          <p>Check out the main page — we've collected some products that you might like</p>
          <Link to="/"><button className='product__btn'>Shopping</button></Link>
        </div>
      </div>
    )
  }


  // ДЛЯ ФУТЕРА - изменение итоговой суммы
  const totalCount = cartItems.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.priceNum * item.count), 0);

  // ВЫДЕЛЕНИЕ ТОВАРОВ
  // выбрать/снять товар
  const handleSelect = (productId, isChecked) => {
    if (isChecked) {
      setSelectedId(prev => [...prev, productId])
    } else {
      setSelectedId(prev => prev.filter(id => id !== productId))
    }
  }

  // удалить выбранные
  const deleteSelected = () => {
    if (selectedId.length === 0) return;   // если ничего не выбрано – выходим
    removeItems(selectedId);               // вызываем функцию из App (удаляет выбранные id)
    setSelectedId([]);                     // очищаем массив выбранных
  };

  // удалить все
  const deleteAll = () => {
    clearCart()
    setSelectedId([])
  }


  return (
    <div className='section cart'>
      <div className="cart__content">
        <h1>Cart</h1>
        <div className="cart__content-btns">
          <button className='product__btn' onClick={deleteSelected}>delete selected ones</button>
          <button className='product__btn' onClick={deleteAll}>delete all products</button>
        </div>
      </div>

      <div className='product__cards'>
        {cartItems.map(product => (
          <Product
            key={product.index}
            product={product}
            increase={() => increase(product.index)}
            decrease={() => decrease(product.index)}
            selected={selectedId.includes(product.index)}
            onSelectChange={(checked) => handleSelect(product.index, checked)}
            toggleLike={toggleLike}
            isLiked={like.includes(product.index)}
          />
        ))}
      </div>


      <div className="cart__content total">
        <p>Total: <span className='total-num'>{totalCount}</span> products <span className='total-price'>${totalPrice.toFixed(2)}</span> </p>
        <button className='product__btn'>place an order</button>
      </div>

    </div>
  );
};

export default Cart;