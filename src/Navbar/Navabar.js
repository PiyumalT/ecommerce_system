import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-outer">
                
                <div className="navbar-inner">
                     <Link>Home</Link>
                     <Link>Customer Service</Link>
                    <Link>Conact Us</Link>
                </div>
                
            </div>
            
        </div>
    );
}

export default Navbar;