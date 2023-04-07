import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './OrderStatus.css';

function OrderStatus() {
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (!id) {
      setOrderId('not found');
    } else {
      setOrderId(id);
    }
  }, []);

  return (
    <div className="order-status-container">
      {orderId === 'not found' ? (
        <>
          <h2>Something went wrong</h2>
          <p>We could not find your order details. Please try again later.</p>
        </>
      ) : (
        <>
          <h2>Order success!</h2>
          <p>Your order ID is <strong>{orderId}</strong>.</p>
        </>
      )}
      <div className="order-status-buttons">
        <Link to="/">Go to home</Link>
        <Link to="/vieworders">View orders</Link>
      </div>
    </div>
  );
}

export default OrderStatus;
