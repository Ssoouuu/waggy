import React, { useEffect, useState } from 'react'
import './scss/style.scss'
import Header from './components/Header'
import Products from './components/Products'
import Gallery from './components/Galery'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import { NavLink } from 'react-router-dom'
import Slider from './components/Slider'
import Favorites from './components/Favorites'
import CookieConsent from 'react-cookie-consent';
import Policy from './components/policy'


const App = () => {

  // ПОИСК ТОВАРОВ
  const [searchProducts, setSearchProducts] = useState('');

  // КОРЗИНА: объект { productIndex: количество }, Инициализация корзины, Мы ищем в памяти браузера строчку с ключом 'cart'. Если она есть — превращаем её из текста в JavaScript-объект через JSON.parse. Если пусто — создаем пустой объект {}.
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : {};
  });

  // ФУНКЦИЯ, КОТОРАЯ ДОБАВЛЯЕТ ТОВАР В КОРЗИНУ
  // prev: Это текущее состояние корзины до клика, 
  // [productId]: ... + 1: Мы находим товар по его ID. Если его еще нет в корзине (prev[productId] выдаст undefined), мы берем 0 и прибавляем 1. Если был — просто увеличиваем цифру.
  const addToCart = (productId) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  // Сохраняем изменение cart в localStorage, Автоматическое сохранение
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  // УВЕЛИЧЕНИЕ КОЛИЧЕСТВА (в корзине)
  const increase = (productId) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  // УМЕНЬШЕНИЕ КОЛИЧЕСТВА (в корзине) – если станет 0, удаляем ключ
  const decrease = (productId) => {
    setCart(prev => {
      // если этого товара в корзине вдруг нет (он undefined), тогда считай, что его 0
      const newCount = (prev[productId] || 0) - 1; 
      if (newCount <= 0) {
        // «Извлеки товар с этим ID в техническую переменную _ (нижнее подчеркивание значит "нам это не важно"), а всё ОСТАЛЬНОЕ положи в объект rest»
        const { [productId]: _, ...rest } = prev; // удаляем ключ
        // rest — это копия старой корзины, но уже без этого товара
        return rest;
      }
      return { ...prev, [productId]: newCount };
    });
  };
  // Сначала вычисляем newCount = текущее количество минус 1. Если товара не было, считаем 0 - 1 = -1.
  // Если newCount <= 0, то нужно удалить товар из корзины. Делаем это с помощью деструктуризации: создаём новый объект rest, который содержит все свойства prev, кроме свойства с ключом productId.
  // Если newCount > 0, просто обновляем количество.
  // Благодаря filter в Cart товары с нулевым количеством всё равно не будут показываться, но лучше удалять их сразу из состояния, чтобы не хранить мусор.

  // ОБЩЕЕ КОЛИЧЕСТВО ТОВАРОВ (сумма всех count)
  const totalQuantity = Object.values(cart).reduce((sum, count) => sum + count, 0);
  // Object.values(cart) – превращает объект в массив значений: например, { "1": 2, "2": 1 } → [2, 1].
  // .reduce((sum, count) => sum + count, 0) – складывает все числа, начиная с 0.

  // ВЫДЕЛЕНИЕ ЧЕКБОКС
  // очистить корзину
  const clearCart = () => {
    setCart({})
  }

  const clearFavorites = () => {
    setLike([])
  }
  // удалить товары
  const removeItems = (ids) => {
    setCart(prev => {
      const newCart = { ...prev }
      ids.forEach(id => delete newCart[id])
      return newCart;
    })
  }
  // ...prev — копируем туда все товары, которые уже лежали в корзине


  // ИЗБРАННОЕ
  // избранное : объект
  const [like, setLike] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // ДОБАВЛЕНИЕ / УДАЛЕНИЕ В ИЗБРАННОЕ
  const toggleLike = (productId) => {
    setLike(prev => {
      if (prev.includes(productId)) {
        // удаляем
        return prev.filter(id => id !== productId);
      } else {
        // добавляем
        return [...prev, productId];
      }
    });
  };
// Метод includes проверяет: «А есть ли уже в этом списке ID товара, на который только что нажали?».
// filter: Он создает новый массив, пропуская через себя все элементы старого.
// id !== productId: Мы говорим фильтру: «Оставь все товары, кроме того, чей ID совпадает с нажатым».

  // СОХРАНЕНИЕ ИЗМЕНЕНИЙ ИЗБРАННЫХ В LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(like))
  }, [like])

  // ВСЕГО В ИЗБРАННОМ
  const likesQuantity = like.length;

  return (
    <div>
      <Router>
        <Header
          searchProducts={searchProducts}
          setSearchProducts={setSearchProducts}
          cartQuantity={totalQuantity}
          likesQuantity={likesQuantity} />

        <Routes>
          <Route path="/" element={
            <>
              <Slider />
              <Products
                searchProducts={searchProducts}
                addToCart={addToCart}
                increase={increase}
                decrease={decrease}
                cart={cart}
                toggleLike={toggleLike}
                likedItems={like}
              />
              <section className="offer">
                <div className="offer__title">
                  Get <span className="text_accent">20% Off</span> on first Purchase
                </div>
                <form className="offer__form">
                  <input type="email" placeholder="your email address" />
                  <input type="text" placeholder="your Full Name" />
                  <input type="text" placeholder="Message" />
                  <button type="submit">Send Message</button>
                </form>
              </section>
              <Gallery />
            </>
          } />
          <Route path="/cart" element={
            <Cart
              cart={cart}
              increase={increase}
              decrease={decrease}
              clearCart={clearCart}
              removeItems={removeItems}
              toggleLike={toggleLike}
              like={like}
            />
          } />

          <Route path='/favorites' element={
            <Favorites
              like={like}
              toggleLike={toggleLike}
              cart={cart}
              increase={increase}
              decrease={decrease}
              addToCart={addToCart}
              clearFavorites={clearFavorites}
            />
          }
          />

          <Route path='/policy' element={
            <Policy />
          } />
        </Routes>
        <Footer />
      </Router>

      <CookieConsent
        buttonText="Принять"
        style={{ background: "#DEAD6F", fontSize: '22px', padding: '0px 10%' }}
        buttonStyle={{ color: "#fff", fontSize: "13px", background: "#41403E", fontSize: '22px', borderRadius: '10px' }}>
        This site uses cookies to enhance the user experience.{" "}
        <a href="/policy" style={{ color: "#fff", textDecoration: "underline" }}>
          Policy page
        </a>
      </CookieConsent>
    </div>
  )
}

export default App
