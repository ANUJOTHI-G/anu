import React, { useState } from 'react';
import "./Product.css";

const Product = ({ product, onAddToCart }) => {
  const { id, name, price, imageUrl } = product;
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart({ id, name, price, quantity });
  };

  return (
    <div className="product">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-details">
        <h3>{name}</h3>
        <p>${price.toFixed(2)}</p>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
          />
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)} (Quantity: {item.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // If the product is already in the cart, update its quantity
      setCartItems((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        )
      );
    } else {
      // If the product is not in the cart, add it
      setCartItems((prevCart) => [...prevCart, product]);
    }
  };

  return (
    <div className="app">
      <Product
        product={{
          id: 1,
          name: 'Product 1',
          price: 19.99,
          imageUrl:'https://img.forestessentialsindia.com/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/8/8/8841_advanced_soundarya_age_defying_facial_serum_with_24k_gold_1.jpg'
        }}
        onAddToCart={handleAddToCart}
      />
      <Product
        product={{
          id: 2,
          name: 'Product 2',
          price: 29.99,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4LGjcwxi1iGAgl8HsuSWiq1bx1FTSaWdVMVq7mxhFxcUPs5PhBDx7afqmPX2mHtzccsE&usqp=CAU',
        }}
        onAddToCart={handleAddToCart}
      />
      <Product
        product={{
          id: 3,
          name: 'Product 3',
          price: 29.99,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLtU9x9DcPjH5C_sTh47I0cTsX1E5X3iHeSA&usqp=CAU',
        }}
        onAddToCart={handleAddToCart}
      />
      <Product
        product={{
          id: 4,
          name: 'Product 4',
          price: 29.99,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOdaVc85ZDSquOcdelselT0EWsGvw3AkGGBg&usqp=CAU',
        }}
        onAddToCart={handleAddToCart}
      />
      <Product
        product={{
          id: 5,
          name: 'Product 5',
          price: 29.99,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQbPZbR5GVieHwNHD7AJ0Qz5Mk1vTpWha35Q&usqp=CAU',
        }}
        onAddToCart={handleAddToCart}
      />
      <Product
        product={{
          id: 6,
          name: 'Product 6',
          price: 29.99,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-DGuMmN_MaEm_9jp9YDvEqJprX-t3lkJC2A&usqp=CAU',
        }}
        onAddToCart={handleAddToCart}
      />
      <Product
        product={{
          id: 7,
          name: 'Product 7',
          price: 29.99,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cwvsDq6EHQDPUOBhm6wdBy1rJdI6uTo44pb3u9bIt8z8mNnGnn3TqxcMe64mH8tfjTg&usqp=CAU',
        }}
        onAddToCart={handleAddToCart}
      />
      <Product
        product={{
          id: 8,
          name: 'Product 8',
          price: 29.99,
          imageUrl:'data:image/jpeg;base64,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',
        }}
        onAddToCart={handleAddToCart}
      />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;


