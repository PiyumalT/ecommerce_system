import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-outer">
    
                <div className="navbar-inner">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false">
                     <span class="navbar-toggler-icon"></span>
                </button>
                
                     <Link>Home</Link>
                     <Link>Customer Service</Link>
                     <Link>Conact Us</Link>
                     <Link>Product</Link>
                </div>
                
            </div>
            
        </div>
    );
}

export default Navbar;