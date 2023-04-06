import React, { useState, useEffect } from 'react';
import './salesList.css';

export default function SalesList() {
  const [data, setData] = useState([]);
  const [orderStatus, setOrderStatus] = useState(null);

  useEffect(() => {
    //retrieve data from Spring Boot backend 
    fetch('http://localhost:8080/order_details')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    //retrieve data from order table
    fetch('http://localhost:8080/order')
      .then(response => response.json())
      .then(order => {
        order.forEach(order => {
          if (order.order_id === data.order_id) {
            //get the status of the order
            setOrderStatus(order.shipped);
          }
        });
      });
  }, [data]);

  function linkTopage() {
    window.location.href = "http://localhost:3000/order_info";
  }

  function handleMarkShippedClick() {
    const confirmed = window.confirm('Are you sure you want to mark shipped?');
    if (confirmed) {
      if (orderStatus !== null) {
        document.getElementsByClassName("text").innerHTML = "shipped";
      }
    } else {}
  }

  return (
    <div className='middle4'>
      <h1>Sales List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Option</th>
            <th>Qty</th>
            <th>Date and Time</th>
            <th>Mark ship</th>
            <th>More details</th>
          </tr>
        </thead>
        <tbody className='tbody'>
          {data.map(order_details => {
            let itemName = '';
            let orderDate = '';

            //retrieve data from item table
            fetch('http://localhost:8080/item')
              .then(response => response.json())
              .then(item => {
                item.forEach(item => {
                  if (item.item_id === order_details.item_id) {
                    //get the name of the item
                    itemName = item.item_name;
                  }
                });
              });

            return (
              <tr key={order_details.id}>
                <td>{order_details.id}</td>
                <td>{itemName}</td>
                <td>{order_details.options}</td>
                <td>{order_details.qty}</td>
                <td>{orderDate}</td>
                <td>
                  <button className="button" onClick={() => handleMarkShippedClick()}><p className='text'>mark_shipped</p></button>
                </td>
                <td>
                  <button className="button" onClick={linkTopage()}>More details</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
