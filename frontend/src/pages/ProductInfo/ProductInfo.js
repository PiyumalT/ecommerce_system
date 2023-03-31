import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navabar';
import './ProductInfo.css';

const ProductDetails = () => {
  // State for quantity of the item
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState([]);
  const [item_opt, setItemopt] = useState("");

  // Function to handle increasing the quantity
  const handleIncrease = () => {
    if (quantity < item.quantity){
      setQuantity(quantity + 1);
    }
  };

  // Function to handle decreasing the quantity
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  function generateOptions(options) {
    if (options===''){
      options='Default';
    }
    const optionsList = (options).split(',').map(option => option.trim());
    if (optionsList.length === 0) {
      optionsList.push('Default');
    }
    return optionsList.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));
  }

  function handleQuantityChange(event) {
    const value = Number(event.target.value);
    if (!isNaN(value) && value > 0 && value <= item.quantity) {
      setQuantity(value);
    }
  }

  useEffect(()=>{
    fetch("http://localhost:8080/api/v1/items/19")
    .then(res=>res.json())
    .then((result)=>{
      setItem(result);
      setItemopt(result.options);
      //setItem(result);
    }
  )
  },[])

    //give backend options to here

    //const optionsList = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    const optionsList = item_opt;
    var options = generateOptions(optionsList);


  return (
    <>
      <Header />
      <Navbar />
      <div className="product-container">
        <div className="product-image">
            <img src="/Picture/5.jpg" alt="Item" />
        </div>
        <div className="product-details">
          <h1 className="product-name">{item.name}</h1>
          <p className="product-description">{item.description}</p>
          <p className="product-price">Rs.{item.price}</p>
          <select className="product-options">
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
