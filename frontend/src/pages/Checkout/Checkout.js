import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navabar';
import './Checkout.css';






function Checkout() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const productid = urlSearchParams.get('productid');
  const option = urlSearchParams.get('option');
  const quantity = urlSearchParams.get('quantity');
  const cartid=urlSearchParams.get('cartid');

  const Delivery_fee=299;
  const Coupon=100;
  
  const [product, setProduct] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const [address, setAddress] = useState({
    name: '',
    addressLine: '',
    city: '',
    district: '',
    phone: ''
  });

  const placeorder = (event) => {


      // Get references to the input fields
    const nameInput = document.querySelector('input[name="name"]');
    const addressInput = document.querySelector('input[name="address"]');
    const cityInput = document.querySelector('input[name="city"]');
    const districtInput = document.querySelector('input[name="district"]');
    const phoneInput = document.querySelector('input[name="phone"]');
    

    if (!nameInput.value.trim() ||
    !addressInput.value.trim() ||
    !cityInput.value.trim() ||
    !districtInput.value.trim() ||
    !phoneInput.value.trim()) {
  // Show an alert if any of the inputs are empty
      alert('Please fill out all the address fields.');
      return;
}

    // Create the JSON object
    const user_address = `${nameInput.value}, ${addressInput.value}, ${cityInput.value}, ${districtInput.value}, ${phoneInput.value}`;
    const saved_user_id = sessionStorage.getItem('user_id');
    const order = {
      order_id: 0, // Replace with the actual order ID
      cus_id: saved_user_id, // Replace with the actual customer ID
      address_id: user_address, // Replace with the actual address ID
      price: product.price * quantity + Delivery_fee - Coupon, // Replace with the actual price
      date: new Date().toISOString(), // Use the current date and time
      paid_amount: 0.0,
      shipped: false,
      quantity: quantity ,
      item_id: productid,
    };

    // Send the JSON object to the server
    fetch('http://localhost:8080/api/v1/orders/newOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(response => {
      // Check if the response was successful
      if (!response.ok) {
        throw new Error('Failed to place order');
      }
    
      // Parse the response body as JSON
      return response.json();
    })
    .then(data => {
      // Catch the order ID from the server response
      const orderId = data.order_id;
    
      // Redirect to the order success page
      window.location.href = `/OrderStatus?id=${orderId}`;
    })
    .catch(error => {
      // Handle any errors here
      alert("error")
    });
    
    

  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (productid) {
          const response = await fetch(`http://localhost:8080/api/v1/items/${productid}`);
          const data = await response.json();
          setProduct(data);
        } else if (cartid) {
            const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            setCartProducts(savedCartItems);
            //console.log(savedCartItems);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [productid, cartid]);

  const totalPrice = 0;

  return (
    <>
    <Header />
    <Navbar />
    <div className="placeorder">
      
      <div className="checkout-container">
        <div className="checkout-left">
          <h2>Order Summary</h2>
          <table className="checkout-table">
            <thead>
              <tr>
                
                    <th>Product</th>
                    <th>Option</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
              </tr>

            </thead>
            <tbody>
            {product && (
              <tr>
                <td>{product.name}</td>
                <td>{option || product.options[0]}</td>
                <td>{product.price}</td>
                <td>{quantity}</td>
                <td>{product.price * quantity}</td>
              </tr>
              
            )}
            {cartid && (
              <>
                {cartProducts.map((cartProduct) => (
                  <tr key={cartProduct.productid}>
                    <td>{cartProduct.item_name}</td>
                    <td>{cartProduct.option}</td>
                    <td>{cartProduct.item_price}</td>
                    <td>{cartProduct.quantity}</td>
                    <td>{cartProduct.item_price * cartProduct.quantity}</td>
                  </tr>
                ))}
              </>
            )}
            <tr>
              <td colSpan="4">Delivery Charges</td>
              <td>{Delivery_fee}</td>
            </tr>
            <tr>
              <td colSpan="4">Coupon Discount</td>
              <td>-{Coupon}</td>
            </tr>
            <tr>
              <td colSpan="4">Total</td>
              <td>
                {product
                    ? `${product.price * quantity + Delivery_fee - Coupon}`
                    : `${5892+199}`}
                    </td>
            </tr>
            </tbody>
          </table>


        </div>
        <div className="checkout-right">
          <h2>Delivery Address</h2>
            <table><thead>
              <tr>
                <td className="label">Name:</td>
                <td><input type="text" name="name"/></td>
              </tr>
              <tr>
                <td className="label">Address:</td>
                <td><input type="text" name="address"/></td>
              </tr>
              <tr>
                <td className="label">City:</td>
                <td><input type="text" name="city"/></td>
              </tr>
              <tr>
                <td className="label">District:</td>
                <td><input type="text" name="district"/></td>
              </tr>
              <tr>
                <td className="label">Phone:</td>
                <td><input type="text" name="phone"/></td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button type="submit" onClick={placeorder}>Place Order</button>
                </td>
              </tr></thead>
            </table>


        </div>
      </div>
    </div>
    <Footer />

    </>

  );
}

export default Checkout;
