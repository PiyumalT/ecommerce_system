import React from "react";

import Product from '../../components/Product/Product'

function Home(){
    return(
        <div className="home">
          <div className="offer">
             <img className="home-image"
             src="./Picture/background.jpeg"
             alt="logo"/>   
          </div>
            
            
            <div className="home-row">
                <Product
                     id="1"
                     title="MRF Tyres"
                     price={40000}
                     rating={4}
                     image="./Picture/2.jpg"

                />
                <Product
                     id="2"
                     title="Valvoline Engine Oil"
                     price={15000}
                     rating={3}
                     image="./Picture/4.jpg"

                />
                <Product
                     id="3"
                     title="Vechile alloy Wheels"
                     price={5000}
                     rating={2}
                     image="./Picture/5.jpg"

                />
            </div>
            <div className="home-row">
                <Product
                     id="1"
                     title="Vechile Seat"
                     price={15000}
                     rating={4}
                     image="./Picture/7.jpg"

                />
                <Product
                     id="2"
                     title="Exide Warranty Battery"
                     price={10000}
                     rating={3}
                     image="./Picture/10.jpg"

                />
                <Product
                     id="3"
                     title="Vehcile radiator"
                     price={20000}
                     rating={2}
                     image="./Picture/11.jpg"

                />
            </div>
            <div className="home-row">
                <Product
                     id="1"
                     title="Radiator Coolant "
                     price={1000}
                     rating={4}
                     image="./Picture/12.jpg"

                />
                <Product
                     id="2"
                     title="Radiator Cooling Fan"
                     price={15000}
                     rating={3}
                     image="./Picture/13.jpg"

                />
                <Product
                     id="3"
                     title="Socket Sober"
                     price={10000}
                     rating={2}
                     image="./Picture/14.jpg"

                />
            </div>
            <div className="home-row">
                <Product
                     id="1"
                     title="Break Pad"
                     price={5000}
                     rating={4}
                     image="./Picture/15.jpg"

                />
                <Product
                     id="2"
                     title="5L Steering Wheel"
                     price={15000}
                     rating={3}
                     image="./Picture/17.jpg"

                />
                <Product
                     id="3"
                     title="Foglamp"
                     price={2000}
                     rating={2}
                     image="./Picture/18.jpg"

                />
            </div>
            <div className="home-row">
                <Product
                     id="1"
                     title="Signals"
                     price={1000}
                     rating={4}
                     image="./Picture/19.jpg"

                />
                <Product
                     id="2"
                     title="Vehicle glass Wiper"
                     price={1000}
                     rating={3}
                     image="./Picture/21.jpg"

                />
                <Product
                     id="3"
                     title="Vehicle Gear Oil"
                     price={10000}
                     rating={2}
                     image="./Picture/24.jpg"

                />
            </div>
            <div className="home-row">
                <Product
                     id="1"
                     title="Wheel Cup"
                     price={1000}
                     rating={4}
                     image="./Picture/25.jpg"

                />
                <Product
                     id="2"
                     title="Piston"
                     price={5000}
                     rating={3}
                     image="./Picture/26.jpg"

                />
                <Product
                     id="3"
                     title="Display"
                     price={5000}
                     rating={2}
                     image="./Picture/28.jpg"

                />
            </div>
            <div className="home-row">
                <Product
                     id="1"
                     title="Car Side Door"
                     price={1100}
                     rating={4}
                     image="./Picture/29.jpg"

                />
                <Product
                     id="2"
                     title="Engine Dianamo"
                     price={15000}
                     rating={3}
                     image="./Picture/30.jpg"

                />
                <Product
                     id="3"
                     title="Engine Silencer"
                     price={5000}
                     rating={2}
                     image="./Picture/31.jpg"

                />
            </div>
            <div className="home-row">
                <Product
                     id="1"
                     title="Engine Standing Mount"
                     price={500}
                     rating={4}
                     image="./Picture/32.jpg"

                />
                <Product
                     id="2"
                     title="Gear lever"
                     price={10000}
                     rating={3}
                     image="./Picture/35.jpg"

                />
                <Product
                     id="3"
                     title="Vehicle Back Baffer "
                     price={11000}
                     rating={2}
                     image="./Picture/37.jpg"

                />
            </div>
            <div className="home-row">
                <Product
                     id="1"
                     title="Oil Filter"
                     price={1000}
                     rating={4}
                     image="./Picture/43.jpg"

                />
                <Product
                     id="2"
                     title="Air Filter"
                     price={1500}
                     rating={3}
                     image="./Picture/44.jpg"

                />
                <Product
                     id="3"
                     title="Van Engine"
                     price={1000000}
                     rating={2}
                     image="./Picture/45.jpg"

                />
            </div>

        </div>

       
     
    )
}

export default Home;