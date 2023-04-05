import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navabar';

import './UserAccountHome.css';

const UserAccountPage = () => {
    const [userInfo, setUserInfo] = useState({});
  
    useEffect(() => {
      const user = localStorage.getItem('user');
      if (user) {
        setUserInfo(JSON.parse(user));
      }
    }, []);
  
    const handleViewOrders = () => {
        window.location.href = '/ViewOrders';
      // handle view order list button click
    };
  
    const handleEditInfo = () => {
      // handle edit account information button click
    };
  
    const handleViewCart = () => {
        window.location.href = '/checkout';

      // handle view cart button click
    };
  
    const handleLogout = () => {
      if (window.confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('user');
        window.location.href = '/';
      }
    };
  
    return (
      <div>
        <Header />
        <Navbar />
        <div className="user-account-container">
          <h1 className="user-account-title">Welcome, {userInfo.name}!</h1>
          <div className="user-account-buttons">
            <button className="user-account-button" onClick={handleViewOrders}>
              View Order List
            </button>
          </div>
          <div className="user-account-buttons">
            <button className="user-account-button" onClick={handleEditInfo}>
              Edit Account Information
            </button>
          </div>
          <div className="user-account-buttons">
            <button className="user-account-button" onClick={handleViewCart}>
              View Cart
            </button>
          </div>
          <div className="user-account-buttons">
            <button className="user-account-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  

export default UserAccountPage;
