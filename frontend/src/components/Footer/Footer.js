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
                <span><Link className="link" to="/Contact_Us" >Contact Us</Link></span>
                        <p><Link className="link" to="/Contact_Us" >FB</Link></p>
                        <p><Link className="link" to="/Contact_Us" >YT</Link></p>
                        <p><Link className="link" to="/Contact_Us" >Email</Link></p>
                    
                        
                </div>
                <div className="footer-area-link-area">
                    <span><Link className="link" to="/FAQ" >Shopping</Link></span>
                    
                        <p><Link className="link" to="/FAQ" >FAQ</Link></p>
                        <p><Link className="link" to="/FAQ" >Payment Method</Link></p>
                        <p><Link className="link" to="/FAQ" >User Guide</Link></p>
                    
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