import React, { useState, useEffect } from 'react';
import './adminDashbord.css';

export default function AdminDashboard() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [todayOrders, setTodayOrders] = useState(0);
  const [todayIncome, setTodayIncome] = useState(0);

  useEffect(() => {
    getTotalUsers();
    getTotalItems();
    getTodayOrders();
    //getTodayIncome();
  }, []);

  //get total users
  function getTotalUsers() {
    fetch('http://localhost:8080/api/v1/users')
      .then(response => response.json())
      .then(data => setTotalUsers(data.total));
  }

  //get total items
  function getTotalItems() {
    fetch('http://localhost:8080/api/v1/items')
      .then(response => response.json())
      .then(data => setTotalItems(data.total));
  }

  //get total today orders and today income
  function getTodayOrders() {
    fetch('http://localhost:8080/api/v1/orders?date=today')
      .then(response => response.json())
      .then(data => {
        setTodayOrders(data.total);
        setTodayIncome(data.totalIncome);
      });
  }

  return (
    <div>
      <div className="second">
        <div className="value">
          <h1>Today orders</h1>
          <div className="total"><h1>{todayOrders}</h1></div>
        </div>
        <div className="value">
          <h1>TodayIncome</h1>
          <div className="total"><h1>{todayIncome}</h1></div>
        </div>
        <div className="value">
          <h1>Total users</h1>
          <div className="total"><h1>{totalUsers}</h1></div>
        </div>
        <div className="value">
          <h1>Total items</h1>
          <div className="total"><h1>{totalItems}</h1></div>
        </div>
      </div>
    </div>
  );
}
