import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navabar';

import './ViewOrders.css';

function ViewOrdersPage({ userInfo }) {
  const [orders, setOrders] = useState([]);
  const saved_user_id = sessionStorage.getItem('user_id');
  const [items, setItems] = useState([]);






  useEffect(() => {
    fetch('http://localhost:8080/api/v1/items')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error(error));
  }, []);


  useEffect(() => {
    // Fetch orders data for the current user from the backend
    const fetchOrders = async () => {
      //const response = await fetch(`/api/orders?user_id=${userInfo.id}`);
      const response = await fetch(`http://localhost:8080/api/v1/orders`);

      const data = await response.json();



      // Map the response data to the required format for rendering
      const formattedData = data.reverse().map((order) => ({
        id: order.order_id,
        date: order.date,
        total_price: order.price,
        shipping_address: order.address_id,
        status: order.shipped ? 'Shipped' : 'Not Shipped',
        items: [
          {
            id: order.item_id,
            name: 'Item Id -' + order.item_id ,//items.find(item => item.item_id === 19)?.name || 'Unknown',
            option: 'Default',
            quantity: order.quantity,
            price: order.price
          }
        ]
      }));

      setOrders(formattedData);
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
          orders.map((order) => {
            if (true) {
              return (
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
                          <td><a href={`http://localhost:3000/ProductInfo/${item.id}`}>{item.name}</a></td>
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
              )
            } else {
              return null;
            }
          })
        )}
      </div>
      <Footer />
    </div>


  )
}

export default ViewOrdersPage;
