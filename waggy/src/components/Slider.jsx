import React from 'react'

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/autoplay"; 
import "swiper/css";
import "swiper/css/pagination";

const data = [
      {
    id: 1,
    text: 'Save 10 - 20 % off',
    title: 'Best Destination For Your Pets',
  },
  {
    id: 2,
    text: 'Пупупу',
    title: 'ПауПау',
  },
  {
    id: 3,
    text: 'Скидки скидки',
    title: 'Собачка мили добри',
  },
]


function Slider() {
  return (
    <div>
          <section className="hero">
      {/* <div className="container">
      <div className="hero__inner">
        <div className="hero__image">
          <img src="img/Img.png" alt="Dog"/>
        </div>

        <div className="hero__content">
          <span className="hero__label">SAVE 10 - 20% OFF</span>
          <h1 className="hero__title">
            Best Destination
            For <span>Your Pets</span>
          </h1>
          <button className="btn">SHOP NOW →</button>
        </div>
      </div>
    </div> */}

    <Swiper 
            modules={[Autoplay, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
                pagination={{
          el: '.custom-pagination', 
          clickable: true
        }}
        autoplay={{ delay: 5000 }}
        >
                    {data.map(({ id, image, title, text }) => {
          return (
            <SwiperSlide key={id} className="hero__inner" style={{display: "flex"}}>
              <div className="hero__image">
                <img src="img/Img.png" alt="Dog"/>
              </div>
                      <div className="hero__content">
          <span className="hero__label">{text}</span>
          <h1 className="hero__title">
                    {title}
          </h1>
          <button className="btn">SHOP NOW →</button>
        </div>

            </SwiperSlide>
          );
        })}

    </Swiper>
    <div className="custom-pagination"></div>
    </section>
    </div>
  )
}

export default Slider
