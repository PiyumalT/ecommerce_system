import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navabar'
import './signin.css'
 
export default function SignIn() {
    return (
        <>
      <div>
          <Header/>
          <Navbar/>
          <div className="middle1">
             <div className="box1">
                    <h1>Log In</h1>
                    <label for="email">Email:</label>
                    <br/>
                    <div class="email_field">
                        <input type="email" name="email"/>
                    </div>
                    <br/>
                    <label for="password">Password</label>
                    <br/>
                    <div class="pass_field">
                        <input type="password" name="password"/>
                    </div>
                    <br/>
                    <br/> 
                    <div class="remember-me">
                         <input type="checkbox" name="remember-me" />
                         <label for="remember-me">Remember Me</label>
                    </div>
                    <button id="login-btn" type="submit">login</button>
                    <div class="ps-forgot"><a href="#">Forgot password?</a></div>
                    <div class="ps-forgot"><a href="./Register">Not have an account? Sign Up now.</a></div>

             </div>    
          </div>
         
      </div>
       <Footer/>
       </>
    )
  }
  

          