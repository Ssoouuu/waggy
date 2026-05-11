import React from 'react';

const Count = ({ count, increase, decrease, toggleLike, isLiked }) => {
  return (
    <div className='product__btns count'>
      <button type='button' className="product__button circle" onClick={decrease}>—</button>
      <input
        type='number'
        min='0'
        value={count}
        className="product__button"
      />
      <button type='button' className="product__button circle" onClick={increase}>+</button>
      <button type='button' className="product__button" onClick={toggleLike}>{isLiked ? '❤️' : '♡'}</button>
    </div>
  );
};

export default Count;