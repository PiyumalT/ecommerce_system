import React from "react";
import './Footer.css';

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
                <span>ELITE NOVA</span>
                        <p>Terms</p>
                        <p>Lincence</p>
                        <p>Market</p>
                    
                        
                </div>
                <div className="footer-area-link-area">
                    <span>HELP</span>
                    
                        <p>Terms</p>
                        <p>Lincence</p>
                        <p>Market</p>
                    
                </div>
                <div className="footer-area-link-area">
                    <span>OUR COMMUNITY</span>
                
                        <p>Terms</p>
                        <p>Lincence</p>
                        <p>Market</p>
                    
                </div>
            </div>
            <div className="footer-end">
                &copy; {new Date().getFullYear()}: Powered by Elite nova  
            </div>
        </div>

    )
}

export default Footer