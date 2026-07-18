import React, { useState, useEffect } from 'react';
import './salesList.css';

export default function SalesList() {
  const [data, setData] = useState([]);
  const [orderState, setOrderState] = useState([]);

  useEffect(() => {
    //retrieve data from Spring Boot backend 
    fetch('http://localhost:8080/api/v1/orders')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setOrderState(data.map(order => ({
          id: order.order_id,
          shipped: order.shipped
        })));
      });
  }, []);

  function handleMarkShippedClick(orderId) {
    setOrderState(prevState =>
      prevState.map(order => {
        if (order.id === orderId) {
          return { ...order, shipped: true };
        }
        return order;
      })
    );
  }

  return (
    <div className='middle4'>
      <h1>Sales List</h1>
      <table>
        <thead>
          <tr>
            <th>OrderID</th>
            <th>ItemID</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Date and Time</th>
            <th>Mark ship</th>
            <th>More details</th>
          </tr>
        </thead>
        <tbody className='tbody'>
          {data.map(orders => {
            const order = orderState.find(order => order.id === orders.order_id);
            return (
              <tr key={orders.order_id}>
                <td>{orders.order_id}</td>
                <td>{orders.item_id}</td>
                <td>{orders.price}</td>
                <td>{orders.quantity}</td>
                <td>{orders.date}</td>
                <td>
                  <button
                    className="button"
                    onClick={() => handleMarkShippedClick(orders.order_id)}
                  >
                    <p className="text">{order.shipped ? 'Shipped' : 'Mark Shipped'}</p>
                  </button>
                </td>
                <td>
                  <button className="button">More details</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
