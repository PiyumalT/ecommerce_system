import React from 'react'
import './adminNavBar.css';
import { Link } from 'react-router-dom';

export default function AdminNavBar() {
  return (
    <div>
        <div className='header-logo-div'>
            <img className='header-logo' src="/Picture/logo.png" alt="logo"/>
            <Link className="btn" to="/">Log Out</Link>
        </div>
        <div className="components">
            <Link className="btn1" to="/AdminDashbord">Dashboard</Link>
            <Link className="btn1" to="/AddProduct">Add product</Link>
            <Link className="btn1" to="/ProductList">Product list</Link>
            <Link className="btn1" to="/SalesList">Sales list</Link>
            <Link className="btn1" to="/UsersList">Users list</Link>
        </div>
    </div>
  )
}
