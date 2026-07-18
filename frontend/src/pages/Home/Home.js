import React from "react";
import Products from "../../components/Products/Products";


//import Product from '../../components/Product/Product'

function Home(){
    return(
        <div className="home">
          <div className="offer">
             <img className="home-image"
             src="./Picture/background.jpeg"
             alt="logo"/>   
          </div>
            
          <Products />
            
        </div>

       
     
    )
}

export default Home;