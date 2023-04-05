import React from "react";
import './ProductCart.css';
import {useStateValue} from '../../StateProvider'

function ProductCart({id,title,image,price,rating}){

    const [dispatch] = useStateValue();

    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }

    return(
        <div className="productcart">
            <img className="productcart-image" src={image} alt=""/>
            <div className="productcart-info">
                <p className="productcart-title">{title}</p>
                <p className="productcart-price">${price}</p>

            <div className="productcart-rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <span>*</span>
                    ))
                }
            </div>
            <p>option : safast</p>
            <div className="additem">
                    <button>-</button>
                    <input type="vars" value="0"/>
                    <button>+</button>
                      
            </div>
            

            <button onClick={removeItem}>Remove from the Cart</button>
            </div>
        </div>
    )

}

export default ProductCart;