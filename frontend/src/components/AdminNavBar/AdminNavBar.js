import React from 'react'
import './adminNavBar.css';

export default function AdminNavBar() {
  return (
    <div>
        <div className='header-logo-div'>
            <img className='header-logo' src="/Picture/logo.png" alt="logo"/>
            <button className="btn">Log Out</button>
        </div>
        <div className="components">
            <button className="btn1">Add product</button>
            <button className="btn1">Product list</button>
            <button className="btn1">Sales list</button>
            <button className="btn1">Users list</button>
        </div>
    </div>
  )
}
