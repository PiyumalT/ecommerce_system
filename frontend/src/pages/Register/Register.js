import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navabar';
import './register.css';
import { Link } from 'react-router-dom';


function Register(){
  const [state, setState] = useState({
    email: '',
    password:'',
    confirmPassword:''
  });

  const [passwordAlert, setPasswordAlert] = useState("");
  const [confirmPasswordAlert, setConfirmPasswordAlert] = useState("");

  const handleEmailChange = (event) => {
    setState({...state, email:event.target.value});
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setState({...state, password});
    if (password.length < 8) {
      setPasswordAlert("Password should be at least 8 characters long");
    } else {
      setPasswordAlert("");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmPassword = event.target.value;
    setState({...state, confirmPassword});
    if (confirmPassword !== state.password) {
      setConfirmPasswordAlert("Confirm password does not match the password");
    } else {
      setConfirmPasswordAlert("");
    }
  };

  const handleSubmit = (event)=>{
    event.preventDefault();

    //send a POST request backend API with the form data

    fetch('http://localhost:8080/api/v1/auth/register',{
      method:'POST',
      headers:{
        'Content-Type':'aplication/json'
      },
      body:JSON.stringify({
        email:state.email,
        password:state.password
      })
    })

    .then(response=>response.json())
  .then(data=>{
    console.log(data);
    // Redirect to Email Sent page after successful registration
    history.push('/Emailsent');
  })
  .catch(error=>{
    console.error(error);
  });
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
            <input type="text" name="email" value={state.email} onChange={handleEmailChange} />
            <br />
            <label htmlFor="password">Password:</label>
            <br />
            <input type="password" name="password" value={state.password} onChange={handlePasswordChange}/>
            <br />
            {passwordAlert && <div className="password-alert">{passwordAlert}</div>}
            <label htmlFor="confirm password">Confirm Password:</label>
            <br />
            <input type="password" name="confirmpassword" value={state.confirmPassword} onChange={handleConfirmPasswordChange} />
            {confirmPasswordAlert && <div className="confirm-password-alert">{confirmPasswordAlert}</div>}
            <br />
            <br />
            <input type="submit" value="Create account" name="submit" />
          </form>
          <br />
          <div>
            <p>
              Don't have an account? <Link to="../signin">Already have an account</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
