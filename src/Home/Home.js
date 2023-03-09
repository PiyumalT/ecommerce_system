import React from "react";
import HomePic from '../Picture/home.jpeg';
import ProductPic from '../Picture/1.jpg';
import ProductPic1 from '../Picture/4.jpg';
import ProductPic2 from '../Picture/5.jpg';

import Product from '../Product/Product'

function Home(){
    return(
        <div className="home">
            <img className="home-image"
             src={HomePic}
             alt="logo"/>

            <div className="home-row">
                <Product
                     id="1"
                     title="The Lean Startup: How Content Innovation"
                     price={11.25}
                     rating={4}
                     image={ProductPic}

                />
                <Product
                     id="2"
                     title="Apple iPhone 14 Pro Max - 128GB - Dual SIM"
                     price={510.96}
                     rating={3}
                     image={ProductPic1}

                />
                <Product
                     id="3"
                     title="New line-up of gaming laptops in India."
                     price={1310.56}
                     rating={2}
                     image={ProductPic2}

                />
            </div>
            <div className="home-row">
                <Product
                     id="1"
                     title="The Lean Startup: How Content Innovation"
                     price={11.25}
                     rating={4}
                     image={ProductPic}

                />
                <Product
                     id="2"
                     title="Apple iPhone 14 Pro Max - 128GB - Dual SIM"
                     price={500.96}
                     rating={3}
                     image={ProductPic1}

                />
                <Product
                     id="3"
                     title="New line-up of gaming laptops in India."
                     price={1310.56}
                     rating={2}
                     image={ProductPic2}

                />
            </div>
            <div className="home-row">
                <Product
                     id="1"
                     title="The Lean Startup: How Content Innovation"
                     price={11.25}
                     rating={4}
                     image={ProductPic}

                />
                <Product
                     id="2"
                     title="Apple iPhone 14 Pro Max - 128GB - Dual SIM"
                     price={500.96}
                     rating={3}
                     image={ProductPic1}

                />
                <Product
                     id="3"
                     title="New line-up of gaming laptops in India."
                     price={1310.56}
                     rating={2}
                     image={ProductPic2}

                />
            </div>

        </div>

       
     
    )
}

export default Home;