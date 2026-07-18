import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navabar';
import './CartPage.css';


const CartPage = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const Delivery_fee = 100;
  const Coupon = 0;

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartProducts(cart);
  }, []);

  const handleClearCart = () => {
    localStorage.removeItem('cartItems');
    setCartProducts([]);
    window.location.href = `/`;

  };

  const handlePlaceOrderClick = () => {
    const cartId = 20; // You can set this to any value you want
    window.location.href = `/placeorder?cartid=00`;
  };

  const totalCartPrice = cartProducts.reduce((total, product) => {
    return total + (product.item_price * product.quantity);
  }, 0);

  return (
    <>
      <Header />
      <Navbar />
      <div className="cart-page">
        <div className="cart-container">
          <h1>Your Cart</h1>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Option</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((product) => (
                <tr key={product.productid}>
                  <td>{product.item_name}</td>
                  <td>{product.option}</td>
                  <td>{product.item_price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.item_price * product.quantity}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4">Delivery Fee:</td>
                <td>{Delivery_fee}</td>
              </tr>
              <tr>
                <td colSpan="4">Coupon:</td>
                <td>{Coupon}</td>
              </tr>
              <tr>
                <td colSpan="4">Total:</td>
                <td>{totalCartPrice + Delivery_fee - Coupon}</td>
              </tr>
            </tfoot>
          </table>
          <button class="clear-btn" onClick={handleClearCart}>Clear Cart</button>
          <button class="place-order-btn" onClick={handlePlaceOrderClick}>Place Order</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
