import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navabar';
import './register.css';
import { Link } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function validateEmail() {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert('Invalid email address');
      return false;
    }
    return true;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateEmail()) {
      // handle form submission
      console.log('Valid email');
    }
  }

  return (
    <div>
      <Header />
      <Navbar />
      <div className="middle">
        <div className="box">
          <h1>Create New account</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail:</label>
            <br />
            <input type="text" name="email" value={email} onChange={handleEmailChange} />
            <br />
            <label htmlFor="password">Password:</label>
            <br />
            <input type="password" name="password" />
            <br />
            <label htmlFor="confirm password">Confirm Password:</label>
            <br />
            <input type="password" name="conpassword" />
            <br />
            <br />
            <input type="submit" value="Create account" name="submit" />
          </form>
          <br />
          <div>
            <p>
              Don't have an account? <Link to="./SignIn">Already have an account</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}