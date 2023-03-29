import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <div className="footer-area">
            <div className="footer-area-top">
                <p>Sign Up for Newsletter</p>
                <input type="text" 
                placeholder="Your Email Address"
               
                />
                <button  className="footer-area-top-button">Subscribe</button>
               
                
            </div>
            <div className="footer-area-link">
                <div className="footer-area-link-area">
                <span>Contact Us</span>
                        <p>FB</p>
                        <p>YT</p>
                        <p>Email</p>
                    
                        
                </div>
                <div className="footer-area-link-area">
                    <span>Shopping</span>
                    
                        <p>FAQ</p>
                        <p>Payment Method</p>
                        <p>User Guide</p>
                    
                </div>
                <div className="footer-area-link-area">
                    <span><Link className="link" to="/About" >Company</Link></span>
                
                        <p><Link className="link" to="/About" >Terms and conditions</Link></p>
                        <p><Link className="link" to="/About" >About</Link></p>
                        <p><Link className="link" to="/About" >Privacy Policy</Link></p>
                    
                </div>
            </div>
            <div className="footer-end">
                &copy; {new Date().getFullYear()}: Powered by Elite nova  
            </div>
        </div>

    )
}

export default Footer