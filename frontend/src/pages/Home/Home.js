import React from "react";

import Product from '../../components/Product/Product'

function Home(){
    return(
        <div className="home">
            <img className="home-image"
             src="/Picture/home.jpeg"
             alt="logo"/>

            <div className="home-row">
            <Product
               id="1"
               title="The Lean Startup: How Content Innovation"
               price={11.25}
               rating={4}
               image="/Picture/1.jpg"
            />

            <Product
                     id="2"
                     title="Apple iPhone 14 Pro Max - 128GB - Dual SIM"
                     price={510.96}
                     rating={3}
                     image="/Picture/4.jpg"
            />

                <Product
                     id="3"
                     title="New line-up of gaming laptops in India."
                     price={1310.56}
                     rating={2}
                     image="/Picture/5.jpg"   
                />
            </div>
            <div className="home-row">
                <Product
                     id="1"
                     title="The Lean Startup: How Content Innovation"
                     price={11.25}
                     rating={4}
                     image="/Picture/1.jpg"
                />
                <Product
                     id="2"
                     title="Apple iPhone 14 Pro Max - 128GB - Dual SIM"
                     price={500.96}
                     rating={3}
                     image="/Picture/4.jpg"
                />
                <Product
                     id="3"
                     title="New line-up of gaming laptops in India."
                     price={1310.56}
                     rating={2}
                     image="/Picture/5.jpg"                   
                />
            </div>
            <div className="home-row">
                <Product
                     id="1"
                     title="The Lean Startup: How Content Innovation"
                     price={11.25}
                     rating={4}
                     image="/Picture/1.jpg"                   
                />
                <Product
                     id="2"
                     title="Apple iPhone 14 Pro Max - 128GB - Dual SIM"
                     price={500.96}
                     rating={3}
                     image="/Picture/4.jpg"                
                />
                <Product
                     id="3"
                     title="New line-up of gaming laptops in India."
                     price={1310.56}
                     rating={2}
                     image="/Picture/5.jpg"                  
                />
            </div>

        </div>

       
     
    )
}


   

export default Home;