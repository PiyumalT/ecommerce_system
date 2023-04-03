import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navabar'
import './signup.css'
 
export default function About() {
    return (
      <div>
          <Header/>
          <Navbar/>
          <div className="middle">
            
                <div className="box">
                    <h1>Create New account</h1>
                    <label for ="email">E-mail:</label>
                    <br/>
                    <input type="text" name="email"/>
                    <br/>
                    <label for="password">Password:</label>
                    <br/>
                    <input type="password" name="password"/>
                    <br/>
                    <label for="confirm password">Confirm Password:</label>
                    <br/>
                    <input type="password" name="conpassword"/>
                    <br/>
                    <input type="submit" value="Create account" name="submit"/>
                    <br/>
                    <div name="login">
                       <a href="signin.php">Already have an account? Login here</a>
                    </div>


                    
                    
                    
                    
                </div>
          
          </div>
          <Footer/>
      </div>
    )
  }
  