import React from "react";
import './AddCart.css'
import Subtotal from '../Subtotal/Subtotal';
import {useStateValue} from '../../StateProvider';
import ProductCart from '../../pages/ProductCart/ProductCart';

function AddCart(){

    const[{basket}] = useStateValue();
    
    return(
        <div className="addcart">
            
            <div className="addcart-left">
                {
                    basket.length === 0 ? (
                        <div>
                            <h2 className="addcart-title">Your shopping basket is empty </h2>
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
                    <div className="addcart-right">
                        <Subtotal/>
                    </div>
                )
            }

        </div>
        
    )
}

export default AddCart;