import React, { useState, useEffect } from 'react';
import './usersList.css'

export default function UsersList() {

  const [data, setData] = useState([]);

  useEffect(() => {
    //retrieve data from Spring Boot backend 
    fetch('http://localhost:8080/user')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <div className='middle3'>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Total Purchases</th>
            <th>Remove User</th>
          </tr>
        </thead>
        <tbody className='tbody'>
          {data.map(user => {
            //calculate the total purchases of each user
             let totalPurchases = 0;

            //retrieve data from order_details table
             fetch('http://localhost:8080/orders')
              .then(response => response.json())
              .then(orders => {
                orders.forEach(order => {
                  if (order.cus_id === user.id) {
                    totalPurchases += order.id;
                  }
                });
              });

            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{totalPurchases}</td>
                <td><button className="button" onClick={() => handleDelete(user.id)}>Remove User</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );

  function handleDelete(id) {
    const confirmed = window.confirm('Are you sure you want to remove this user?');
    if (confirmed) {
      fetch(`http://localhost:8080/user/${id}`, { method: 'DELETE' })
        .then(response => {
          // do something after the item has been deleted
        });
    }
  }
}
