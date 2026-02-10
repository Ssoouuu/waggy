import React, {useState} from 'react'


const ALL_PRODUCTS = [
    {index: '1', img: "../../img/product1.png", title: 'Dry food', star: '4.0', price: '$18.00', category: 'cat' },
    {index: '2', img: "../../img/product2.png", title: 'Canned dog food', star: '4.0', price: '$8.00', category: 'dog' },
    {index: '3', img: "../../img/product3.png", title: 'Treats for cats', star: '5.0', price: '$5.00', category: 'cat' },
    {index: '4', img: "../../img/product4.png", title: 'Pate for dogs', star: '5.0', price: '$5.00', category: 'dog' },
    {index: '5', img: "../../img/product5.png", title: 'Dry cat food', star: '5.0', price: '$5.00', category: 'cat' },
    {index: '6', img: "../../img/product6.png", title: 'Food for parrots', star: '5.0', price: '$5.00', category: 'bird' },
    {index: '7', img: "../../img/product7.png", title: 'Canned dog food', star: '5.0', price: '$5.00', category: 'dog' },
    {index: '8', img: "../../img/product8.png", title: 'Сandy for cats', star: '5.0', price: '$5.00', category: 'cat' },
]

const Products = () => {
      const [filterText, setFilterText] = useState('');
    const [showCats, setShowCats] = useState(true);
  const [showDogs, setShowDogs] = useState(true);
  const [showBird, setShowBird] = useState(true);


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

    const grouped = filtered.reduce((acc, product) => {
    acc[product.category] ??= [];
    acc[product.category].push(product);
    return acc;
  }, {});


// class CartManageer {
//     constructor() {
//         this.productsBtn = document.querySelectorAll('.product__btn')
//         this.cartProductsList = document.querySelector('.product__card')
//         this.cart = document.querySelector('.cart')
//         this.cartQuantity = this.cart.querySelector('.cart__quantity')
        
//         this.init();
//     }

//     init() {
//         this.initializeProducts();
//         this.setupEventListener();
//     }

//     generateId = () => {
//         return crypto.randomUUID ?
//         crypto.randomUUID() :
//         Math.random().toString(36).substring(2, 15) + math.random().toString(36).subString(2, 15);
//     }

//     updateCartQuantity = () => {
//         const productsCount = this.getCartProductsCount();
//         this.cartQuantity.textContent = productsCount;
//         // this.cart.classList.toggle('active', productsCount > 0);
//     }

//     getCartProductsCount = () => {
//         return this.cartProductsList.querySelector('.product__cards')?.children.length || 0;
//     }




  return (
    <div className='products'>
      <h2>Products</h2>
      <form>
        <input
        placeholder='Найти...'
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
        />
                <label>
          <input
            type='checkbox'
            checked={showCats}
            onChange={e => setShowCats(e.target.checked)}
          />
          {' '}cat
        </label>

         <label>
          <input
            type='checkbox'
            checked={showDogs}
            onChange={e => setShowDogs(e.target.checked)}
          />
          {' '}dog
        </label>

        <label>
          <input
            type='checkbox'
            checked={showBird}
            onChange={e => setShowBird(e.target.checked)}
          />
          {' '}bird
        </label>
      </form>
      <div className='product__cards'>
        
        {/* {ALL_PRODUCTS.map(({img, title, star, price, index}) => (
            <div className='product__card' key={index}>
                <img src={img} />
                <h3 className='products-title'>{title}</h3>
                <p className='products-star'>{star}</p>
                <p className='products-price'>{price}</p>
                <button type='submit' className='products-btn'>Add to cart</button>
            </div>
        ))} */}
                  {Object.entries(grouped).map(([category, products]) => (
            <>
            <div key={category}>

            </div>

        {products.map(({img, title, star, price, index}) => (
            <div className='product__card' key={index}>
                <div className='products-image'>
                     <img src={img} />
                </div>
               
                <h3 className='products-title'>{title}</h3>
                <p className='products-star'>{star}</p>
                <p className='products-price'>{price}</p>
                <a href='#' className='product__btn'>Add to cart</a>
            </div>
        ))}
            </>
          ))}
      </div>
    </div>
  )
}

export default Products
