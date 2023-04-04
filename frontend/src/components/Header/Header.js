import React from 'react';
import './Header.css';
import {FaSearch} from 'react-icons/fa';
import {FaShoppingBasket} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {useStateValue} from '../../StateProvider';
//import {auth} from '../firebase'





function Header() {

  const [{basket,loggedinuser}, dispatch] = useStateValue();

  console.log("my basket ",basket)
  const logoutUser =()=>{
    if(loggedinuser){
        
    }
  }

  return (
    <div>
      <div className='header-logo-div'><img className='header-logo' src="/Picture/logo.png" alt="logo"/></div> 
    <nav className="header">
      
    
      <img className='header-icon' src="/Picture/icon.png" alt="icon"/>
      
        <div className='header-search'>
        
            <input type="text" placeholder="Search here" className='header-search-input'/>
            <FaSearch className="header-search-icon"/>
        </div>

        <div className='header-nav'>
    
        {/*First Link*/}

        <Link to={!loggedinuser && "/Register" } className='header-link'>
            <div onClick={logoutUser}className='header-option'>
            <span className='header-option-line1'>Hello, {loggedinuser?.email}</span>
             <span className='header-option-line2'>{loggedinuser ? 'Signout' : 'Sign In'}</span>
            </div>
        </Link> 

         {/*Second Link*/}

         <Link to="/" className='header-link'>
            <div className='header-option'>
             <span className='header-option-line1'>Orders</span>
             <span className='header-option-line2'>& returns</span>
            </div>
        </Link> 
        

        </div>   

        {/*Basket Icon*/}
        <Link to="/checkout" className='header-link'>
            <div className='header-option-basket'>
                <FaShoppingBasket/>
                <span className='header-option-line2 header-product-count'>{basket?.length}</span>
            </div>
        </Link> 
    </nav>
    </div>
  );
}

export default Header;
