import React from 'react'
import './scss/style.scss'
import Header from './components/Header'
import Products from './components/Products'
import Gallery from './components/Galery'
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart'
import { NavLink } from 'react-router-dom'
import Slider from './components/Slider'


const App = () => {

    const increase = () => {

    }

  return (
    <div>
        <Router>
      <Header/>
    <Slider/>

    <Products/>
    <section className="offer">
      <div className="offer__title">Get <span className="text_accent">20% Off</span> on first Purchase
      </div>
            <form className="offer__form">
        <input type="email" placeholder="your email address"/>
        <input type="text" placeholder="your Full Name"/>
        <input type="text" placeholder="Message"/>
        <button type="submit">Send Message</button>
      </form>

    </section>

    <Gallery/>
    <Footer/>

    
      <Routes>
        <Route path="/" element={<Cart/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
