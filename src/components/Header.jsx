import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import Products from './Products';


const Header = ({ searchProducts, setSearchProducts, cartQuantity, likesQuantity }) => {

    const activeLinkClass = 'nav-link active';
    const normalLinkClass = 'nav-link';

    return (
        <div>
            <div className='header'>
                <img src="../../img/logo.svg" alt="Лого" />
                <input
                    type="text"
                    placeholder='Search for more than 10,000 products'
                    value={searchProducts}
                    onChange={(e) => setSearchProducts(e.target.value)}
                />

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
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? activeLinkClass : normalLinkClass}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/page"
                            className={({ isActive }) => isActive ? activeLinkClass : normalLinkClass}
                        >
                            Page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/shop"
                            className={({ isActive }) => isActive ? activeLinkClass : normalLinkClass}
                        >
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) => isActive ? activeLinkClass : normalLinkClass}
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => isActive ? activeLinkClass : normalLinkClass}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/offer"
                            className={({ isActive }) => isActive ? activeLinkClass : normalLinkClass}
                        >
                            Offer
                        </NavLink>
                    </li>
                    <NavLink
                        to="/user"
                        className={({ isActive }) => isActive ? "header__cart cart active" : "header__cart cart"}
                    >
                        <div className='header-icon'>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.2934 2.77492C13.4572 1.87215 12.2893 1.375 11.0002 1.375C9.70431 1.375 8.53255 1.86914 7.70025 2.76633C6.85892 3.6734 6.449 4.90617 6.54525 6.23734C6.73603 8.86359 8.7345 11 11.0002 11C13.266 11 15.261 8.86402 15.4548 6.2382C15.5524 4.91906 15.1399 3.68887 14.2934 2.77492ZM18.5627 20.625H3.43775C3.23977 20.6276 3.04372 20.586 2.86384 20.5033C2.68396 20.4205 2.52479 20.2987 2.3979 20.1468C2.11861 19.8129 2.00603 19.357 2.08939 18.8959C2.45204 16.8841 3.58384 15.1942 5.36275 14.0078C6.94314 12.9546 8.94505 12.375 11.0002 12.375C13.0554 12.375 15.0574 12.9551 16.6377 14.0078C18.4167 15.1938 19.5484 16.8837 19.9111 18.8955C19.9945 19.3566 19.8819 19.8125 19.6026 20.1463C19.4757 20.2984 19.3166 20.4203 19.1367 20.5031C18.9568 20.5859 18.7608 20.6275 18.5627 20.625Z" />
                            </svg>

                        </div>
                    </NavLink>
                    <NavLink
                        to="/favorites"
                        className={({ isActive }) => isActive ? "header__cart cart active" : "header__cart cart"}
                    >
                        <div className='header-icon'>
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.93798 16.5C8.66199 16.4997 8.39249 16.4163 8.16454 16.2607C4.78763 13.9683 3.3254 12.3965 2.51888 11.4138C0.800126 9.31906 -0.022726 7.16848 0.000477133 4.83957C0.0275475 2.17078 2.16868 0 4.77345 0C6.66751 0 7.97935 1.06691 8.74333 1.95551C8.76753 1.98337 8.79743 2.00572 8.83101 2.02103C8.8646 2.03634 8.90107 2.04427 8.93798 2.04427C8.97489 2.04427 9.01136 2.03634 9.04494 2.02103C9.07853 2.00572 9.10843 1.98337 9.13263 1.95551C9.89661 1.06605 11.2084 0 13.1025 0C15.7073 0 17.8484 2.17078 17.8755 4.84C17.8987 7.16934 17.075 9.31992 15.3571 11.4142C14.5506 12.3969 13.0883 13.9687 9.71142 16.2611C9.48342 16.4165 9.21392 16.4998 8.93798 16.5Z" />
                            </svg>

                            <span className='cart__quantity'>{likesQuantity}</span>
                        </div>
                    </NavLink>
                    <NavLink
                        to="/cart"
                        className={({ isActive }) => isActive ? "header__cart cart active" : "header__cart cart"}
                    >
                        <div className='header-icon'>

                            <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5625 19.25C8.32189 19.25 8.9375 18.6344 8.9375 17.875C8.9375 17.1156 8.32189 16.5 7.5625 16.5C6.80311 16.5 6.1875 17.1156 6.1875 17.875C6.1875 18.6344 6.80311 19.25 7.5625 19.25Z" fill="#41403E" />
                                <path d="M17.1875 19.25C17.9469 19.25 18.5625 18.6344 18.5625 17.875C18.5625 17.1156 17.9469 16.5 17.1875 16.5C16.4281 16.5 15.8125 17.1156 15.8125 17.875C15.8125 18.6344 16.4281 19.25 17.1875 19.25Z" fill="#41403E" />
                                <path d="M19.6281 5.18977C19.5315 5.07162 19.4099 4.97647 19.2719 4.91121C19.134 4.84596 18.9832 4.81224 18.8306 4.8125H5.75309L5.48969 3.31805C5.4616 3.15886 5.37832 3.01466 5.25448 2.91078C5.13063 2.80689 4.97415 2.74997 4.8125 2.75H2.0625C1.88016 2.75 1.7053 2.82243 1.57636 2.95136C1.44743 3.0803 1.375 3.25516 1.375 3.4375C1.375 3.61984 1.44743 3.7947 1.57636 3.92364C1.7053 4.05257 1.88016 4.125 2.0625 4.125H4.23586L6.19781 15.2445C6.2259 15.4036 6.30918 15.5478 6.43302 15.6517C6.55687 15.7556 6.71335 15.8125 6.875 15.8125H17.875C18.0573 15.8125 18.2322 15.7401 18.3611 15.6111C18.4901 15.4822 18.5625 15.3073 18.5625 15.125C18.5625 14.9427 18.4901 14.7678 18.3611 14.6389C18.2322 14.5099 18.0573 14.4375 17.875 14.4375H7.45164L7.2093 13.0625H17.5931C17.8315 13.0622 18.0625 12.9795 18.247 12.8285C18.4315 12.6774 18.5581 12.4673 18.6055 12.2336L19.843 6.04613C19.8728 5.89639 19.869 5.74189 19.8318 5.59379C19.7947 5.4457 19.7251 5.3077 19.6281 5.18977Z"/>
                            </svg>

                            <span className='cart__quantity'>{cartQuantity}</span>
                        </div>
                    </NavLink>

                </ul>
            </nav >

        </div >
    )
}

export default Header
