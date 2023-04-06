import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navabar'
import './About.css'
 

export default function About() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <div className="middle">
        
           <div className="box">
              <h1>About Us</h1>
              <p>We are a company that specializes in providing high-quality products and services to our customers. Our
               mission is to exceed expectations and build long-term relationships with our clients.</p>
               <br/>
               <hr/>
               <h2>Meet Our Owners</h2>
               <div class="owner" id="owner1">
               <h3>Nayantha Yasiru</h3>
               <p> Najantha is student of university of Kelaniya</p><br/><br/>
               </div>
               <div class="owner" id="owner2">
               <h3>Nimesha Kavindi</h3>
               <p>Nimesha is student of university of Kelaniya</p><br/><br/>
               </div>
               <div class="owner" id="owner3">
               <h3>Pathum Sanjana</h3>
               <p>Pathum is student of university of Kelaniya</p><br/><br/>
               </div>
               <div class="owner" id="owner4">
               <h3>Tharindu Piyumal</h3>
               <p>Tharindu is student of university of Kelaniya</p><br/><br/>
               </div>
               <div class="owner" id="owner5">
               <h3>Sivanantharasa Tharsan</h3>
               <p>Tharsan is student of university of Kelaniya</p><br/><br/>
               </div>
           </div>
        
        </div>
        <Footer/>
    </div>
  )
}
