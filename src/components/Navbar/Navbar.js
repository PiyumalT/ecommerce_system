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

                     <Link>Car Part</Link>
                     <Link>Motorcycle Part</Link>
                     <Link>Other Part</Link>
                     <Link>Tools</Link>
                     <Link>Tyres</Link>
                     <Link>Accessories</Link>
                </div>
                
            </div>
            
        </div>
    );
}

export default Navbar;