// import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import { useState } from 'react';

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];

  return (
    <div>
      <h1>Product List</h1>
      <div>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default AddToCart;
