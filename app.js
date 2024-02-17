import React, { useState } from 'react';
import './App.css';

const productsData = [
  {
    id: 1,
    name: 'Nike TR13',
    imgSrc : "data:image/jpeg;base64,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",
    price: 399,
    rating: 10,
  },
  {
    id: 2,
    name: 'Adidias GR-ED',
    imgSrc : "data:image/jpeg;base64,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",
    price: 399,
    rating: 10,
  },
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const incrementQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const filteredProducts = productsData
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === 'All' || product.category === selectedCategory)
    )
    .map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.imgSrc} alt={product.name} />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <div className="product-rating">Rating: {product.rating}</div>
        </div>
        <div className="product-actions">
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <div className="quantity-actions">
            <button onClick={() => decrementQuantity(product.id)}>-</button>
            <button onClick={() => incrementQuantity(product.id)}>+</button>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="app">
      <header>
        <h1>Shopping Cart</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      <nav>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
         
        </select>
      </nav>
      <main>
        <div className="products">{filteredProducts}</div>
      </main>
      <aside>
        <h2>Shopping Cart</h2>
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>${item.price * item.quantity}</span>
              <span>Quantity: {item.quantity}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default App;