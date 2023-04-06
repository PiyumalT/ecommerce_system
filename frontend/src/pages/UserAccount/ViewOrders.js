import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navabar';

import './ViewOrders.css';

function ViewOrdersPage({ userInfo }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders data for the current user from the backend
    const fetchOrders = async () => {
      //const response = await fetch(`/api/orders?user_id=${userInfo.id}`);
      const response = await fetch(`http://localhost:3003/orders`);

      const data = await response.json();
      setOrders(data);
    };
    fetchOrders();
  }, [userInfo]);

  return (
    <div>
      <Header />
      <Navbar />
      <div className="view-orders-container">
        <h1 className="view-orders-title">My Orders</h1>
        {orders.length === 0 ? (
          <p className="view-orders-message">You have no orders yet.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="view-orders-item">
              <h4>Order Number: {order.id}</h4>
              <p>Date: {order.date}</p>
              <table className="view-orders-table">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Item Option</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.option}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="3">Total Price:</td>
                    <td>{order.total_price}</td>
                  </tr>
                </tbody>
              </table>
              <p>Shipping Address: {order.shipping_address}</p>
              <p>Order Status: {order.status}</p>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ViewOrdersPage;
