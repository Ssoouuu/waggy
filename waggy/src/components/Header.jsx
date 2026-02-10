import React from 'react'
import { Link } from 'react-router-dom';
import Products from './Products';


const Header = () => {
    
  return (
    <div>
    <div className='header'>    
        <img src="../../img/logo.svg" alt="Лого" />
        <input type="text" placeholder='Search for more than 10,000 products' />
        <div>
            <p className='light'>Phone</p>
            <p>+980-34984089</p>
        </div>
        
        
        <div>
            <p className='light'>Email</p>
           <p>waggy@gmail.com</p> 
        </div>
    </div>
    <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Page</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Offer</a></li>
            <Link to="/cart">
            <div className='header__cart cart' tabIndex="0">
                <div>
                    <img src="../../img/cart.svg" alt="Корзина" />
                    <span className='cart__quantity'>0</span>
                </div>
            </div>
            
            </Link>
            </ul>
        </nav>

    </div>
  )
}

export default Header
