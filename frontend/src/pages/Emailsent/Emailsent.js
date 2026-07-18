import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navabar'
import './email.css'
 

export default function Emailsent() {
  return (
    <div>
        <Header/>
        <Navbar/>
       
        <div class="middle2">
            <div class="box2">
                <br/>
                <h2>Your email has been successfully sent,</h2>
                <br/>
                <br/>
                <h3> please check your inbox for further information.</h3>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
