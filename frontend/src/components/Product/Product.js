import React from "react";
import './Product.css';
import '../../pages/Home/Home.css';
import {useStateValue} from '../../StateProvider';
import { Link } from "react-router-dom";


function Product({id,title,image,price,rating,url}){
    
    const [{basket}, dispatch] = useStateValue()
    const addToBasket = () => {
        dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
            url: url
        }
    })
} 
    
    return(
        <div className="product">
            <div className="product-info">
                
            <Link to={url} className="li" ><p>{title}</p></Link>
                <p className="product-price">
                    <strong>{price}</strong>
                    <small>/=</small>
                </p>

                <div className="product-rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>*</p>
                        ))
                    }

                </div>

            </div>
            <img src={image} alt="pic"/>
            <button onClick={addToBasket}>Add to Basket</button>

        </div>         

    )
}

export default Product;