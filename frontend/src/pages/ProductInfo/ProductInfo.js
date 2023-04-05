import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navabar';
import './ProductInfo.css';

const ProductDetails = () => {
  // State for quantity of the item
  const [quantity, setQuantity] = useState(1);

  // Function to handle increasing the quantity
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  // Function to handle decreasing the quantity
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  function generateOptions(optionsList) {
    return optionsList.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));
  }

  //give backend options to here
  const optionsList = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const options = generateOptions(optionsList);

  //remove later
  function handleOptionChange(event) {
    const selectedOption = event.target.value;
    alert(`Selected option: ${selectedOption}`);
  }

  function handleQuantityChange(event) {
    const value = Number(event.target.value);
    if (!isNaN(value) && value > 0 && value <= 100) {
      setQuantity(value);
    }
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="product-container">
        <div className="product-image">
            <img src="/Picture/5.jpg" alt="Item" />
        </div>
        <div className="product-details">
          <h1 className="product-name">Item Name</h1>
          <p className="product-description">Item Description</p>
          <p className="product-price">$10.00</p>
          <select className="product-options" onChange={handleOptionChange}>
            {options}
          </select>
          <div className="quantity">
            <button className="decrease" onClick={handleDecrease}>
              -
            </button>
            <input
              type="text"
              value={quantity}
              onChange={handleQuantityChange}
              //onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button className="increase" onClick={handleIncrease}>
              +
            </button>
          </div>
          <div className="buttons">
            <button className="buy-now">Buy Now</button>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
