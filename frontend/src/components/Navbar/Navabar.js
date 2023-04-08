import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar(){
    return(
        <div className="navbar">
            
                     <Link to="/" className="link_2">Home</Link>
                     <Link  to="/FAQ" className="link_2">Customer Service</Link>
                     <Link to="/Contact_Us"className="link_2" >Contact Us</Link>
                     <Link to="/About" className="link_2">About</Link>
            
        </div>
    );
}

export default Navbar;