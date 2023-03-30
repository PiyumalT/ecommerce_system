import React from 'react'
import './contact_Us.css'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navabar'
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Contact_Us() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <div className="middle">
          <section class="contact">

            <div class="contact-box">

                <div class="content">
                    <h2>Contact Us</h2>
                    <p><br/><br/>Yes, we offer a limited warranty on all of our products, and we stand behind the quality of our
                        products</p>
                </div>

                <div class="container">
                    <div class="contactInfo">
                        <div class="box">
                            <div class="icon"><i aria-hidden="true" class="fa fa-map-marker"></i></div>
                            <div class="text">
                                <h3>Address</h3>
                                <p>No:156, Kandy road,<br/> Dalugama.</p>
                            </div>
                        </div>

                        <div class="box">
                            <div class="icon"><i aria-hidden="true" class="fa fa-phone"></i></div>
                            <div class="text">
                                <h3>Phone</h3>
                                <p>011-5698754</p>
                            </div>
                        </div>

                        <div class="box">
                            <div class="icon"><i aria-hidden="true" class="fa fa-envelope"></i></div>
                            <div class="text">
                                <h3>E-mail</h3>
                                <p>webproject1@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div class="social">
                        <div class="box">
                            <a href="facebook.com">
                                <div class="icon"><i class="fa-brands fa-facebook"></i></div>
                            </a>
                            <div class="text">
                                <h3>Facebook</h3>

                            </div>
                        </div>

                        <div class="box">
                            <a href="youtube.com">
                            <div class="icon"><i class="fa-brands fa-youtube"></i></div>
                            </a>
                            <div class="text">
                                <h3>Youtube</h3>

                            </div>
                        </div>

                        <div class="box">
                            <a href="twitter.com">
                            <div class="icon"><i class="fa-brands fa-twitter"></i></div>
                            </a>
                            <div class="text">
                                <h3>Twitter</h3>

                            </div>
                        </div>
                    </div>
            </div>


        
         </div>
          </section>
        </div>
        <Footer/>
    </div>
  )
}
