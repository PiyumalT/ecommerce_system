import React from "react";
import './Checkout.css'
import Subtotal from '../Subtotal/Subtotal';
import {useStateValue} from '../StateProvider';
import ProductCart from '../ProductCart/ProductCart';

function Checkout(){

    const[{basket}] = useStateValue();
    
    return(
        <div className="checkout">
            
            <div className="checkout-left">
                {
                    basket.length === 0 ? (
                        <div>
                            <h2 className="checkout-title">Your shopping basket is empty </h2>
                            <p>You have no items in your basket. Buy one</p>
                        </div>
                    ):(
                        <div>
                            <h2 className="shoppingbaskettitle">Items in the Shopping Basket</h2>
                            {
                                basket.map(item => (
                                    <ProductCart
                                      id={item.id}
                                      title={item.title}
                                      image={item.image}
                                      price={item.price}
                                      rating={item.rating}
                                    />
                                ))
                            }
                        </div>
                    )
                }
                 
            </div>
            {
                basket.length > 0 && (
                    <div className="checkout-right">
                        <Subtotal/>
                    </div>
                )
            }

        </div>
        
    )
}

export default Checkout;