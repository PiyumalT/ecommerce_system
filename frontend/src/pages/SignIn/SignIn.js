import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navabar';
import './signin.css';
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const data = { email, password };
  
    fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // handle the response from the server here
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <div>
        <Header />
        <Navbar />
        <div className="middle1">
          <div className="box1">
            <h1>Log In</h1>
            <label htmlFor="email">Email:</label>
            <br />
            <div className="email_field">
              <input type="email" name="email" value={email} onChange={handleEmailChange} />
            </div>
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <div className="pass_field">
              <input type="password" name="password" value={password} onChange={handlePasswordChange} />
            </div>
            <br />
            <br /> 
            <div className="remember-me">
              <input type="checkbox" name="remember-me" />
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <form onSubmit={handleSubmit}>
              <button id="login-btn" type="submit">login</button>
            </form>
            <div className="ps-forgot"><a href="#">Forgot password?</a></div>
            <div className="ps-forgot"><a href="./Register">Not have an account? Sign Up now.</a></div>
          </div>    
        </div>
      </div>
      <Footer />
    </>
  );
}
