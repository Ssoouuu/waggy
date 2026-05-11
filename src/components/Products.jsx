import React, { useEffect, useState } from 'react'
import ALL_PRODUCTS from '../data';
import Product from './Product';

const Products = ({ searchProducts, setSearchProducts, addToCart, increase, decrease, cart, toggleLike, likedItems }) => {

  // Состояния для текстового фильтра и выбора категорий
  const [filterText, setFilterText] = useState(searchProducts);
  const [showCats, setShowCats] = useState(true);
  const [showDogs, setShowDogs] = useState(true);
  const [showBird, setShowBird] = useState(true);

  // Синхронизация внутреннего поиска с глобальным из Header
  useEffect(() => {
    setFilterText(searchProducts);
  }, [searchProducts])


  // Основная логика фильтрации по названию и выбранным категориям
  const filtered = ALL_PRODUCTS.filter(product => {
    const matchText = product.title

      .toLowerCase()
      .includes(filterText.toLowerCase());

    const matchCategory =
      (!showCats && !showDogs && !showBird) ||
      (product.category === 'cat' && showCats) ||
      (product.category === 'dog' && showDogs) ||
      (product.category === 'bird' && showBird);

    return matchText && matchCategory;
  });

  // Вспомогательная группировка товаров
  const grouped = filtered.reduce((acc, product) => {
    acc[product.category] ??= [];
    acc[product.category].push(product);
    return acc;
  }, {});

  // фильтры
  // Проверка, включены ли все фильтры одновременно
  const allActive = showCats && showDogs && showBird;

  // Обработчики кликов по фильтрам: сброс и переключение категорий
  const handleAll = () => {
    setShowCats(true);
    setShowDogs(true);
    setShowBird(true);
  };

  const handleCat = () => {
    if (allActive) {
      setShowCats(true);
      setShowDogs(false);
      setShowBird(false);
    } else {
      setShowCats(!showCats);
    }
  };

  const handleDog = () => {
    if (allActive) {
      setShowCats(false);
      setShowDogs(true);
      setShowBird(false);
    } else {
      setShowDogs(!showDogs);
    }
  };

  const handleBird = () => {
    if (allActive) {
      setShowCats(false);
      setShowDogs(false);
      setShowBird(true);
    } else {
      setShowBird(!showBird);
    }
  };

  return (
    <div className='products'>
      <div className="products__header">
        <h2>Products</h2>
        {/* Кнопки управления фильтрацией */}
        <div className="filter-links">
          <span className={allActive ? 'active' : ''} onClick={handleAll}>
            all
          </span>
          <span className={showCats && !allActive ? 'active' : ''} onClick={handleCat}>
            cat
          </span>
          <span className={showDogs && !allActive ? 'active' : ''} onClick={handleDog}>
            dog
          </span>
          <span className={showBird && !allActive ? 'active' : ''} onClick={handleBird}>
            bird
          </span>
        </div>
        <button className="product__btns-cart"> shop All → </button>
      </div>

      <div className='product__cards'>
        {/* Отрисовка отфильтрованного списка через компонент карточки товара */}
        {filtered.map(product => {
          const count = cart[product.index] || 0;

          return (
            <Product
              key={product.index}
              product={{
                ...product,
                count,
                priceNum: product.price
              }}
              addToCart={addToCart}
              increase={() => increase(product.index)}
              decrease={() => decrease(product.index)}
              toggleLike={toggleLike}
              isLiked={likedItems.includes(product.index)}
            />

          );
        })}
      </div>
    </div>
  )
}

export default Products
