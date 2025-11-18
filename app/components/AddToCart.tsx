import React from 'react';

const AddToCart = () => {
  return (
    <button
      onClick={() => {
        console.log('Button clicked');
      }}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
