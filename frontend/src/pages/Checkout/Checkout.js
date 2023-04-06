import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navabar';
import './Checkout.css';

function Checkout() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const productid = urlSearchParams.get('productid');
  const option = urlSearchParams.get('option');
  const quantity = urlSearchParams.get('quantity');
  const cartid=urlSearchParams.get('cartid');
  
  const [product, setProduct] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const [address, setAddress] = useState({
    name: '',
    addressLine: '',
    city: '',
    district: '',
    phone: ''
  });

  const handleAddressChange = (event) => {
    setAddress({
      ...address,
      [event.target.name]: event.target.value
    });
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (productid) {
          const response = await fetch(`http://localhost:8080/api/v1/items/${productid}`);
          const data = await response.json();
          setProduct(data);
        } else if (cartid) {
          const response = await fetch(`http://localhost:8080/api/v1/cart/`);
          const data = await response.json();
          setCartProducts(data);
          console.log(cartid);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [productid, cartid]);

  return (
    <>
    <Header />
    <Navbar />
    <div className="placeorder">
      
      <div className="checkout-container">
        <div className="checkout-left">
          <h2>Order Summary</h2>
          <table className="checkout-table">
            <thead>
              <tr>
                
                    <th>Product</th>
                    <th>Option</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
              </tr>

            </thead>
            <tbody>
            {product && (
              <tr>
                <td>{product.name}</td>
                <td>{option || product.options[0]}</td>
                <td>{product.price}</td>
                <td>{quantity}</td>
                <td>{product.price * quantity}</td>
              </tr>
            )}
            {cartid && (
              <>
                {cartProducts.map((cartProduct) => (
                  <tr key={cartProduct.id}>
                    <td>{cartProduct.item_id}</td>
                    <td>{cartProduct.options}</td>
                    <td>{cartProduct.user_id}</td>
                    <td>{cartProduct.qty}</td>
                    <td>{cartProduct.user_id * cartProduct.qty}</td>
                  </tr>
                ))}
              </>
            )}
            <tr>
              <td colSpan="4">Delivery Charges</td>
              <td>$5.00</td>
            </tr>
            <tr>
              <td colSpan="4">Coupon Discount</td>
              <td>-$3.00</td>
            </tr>
            <tr>
              <td colSpan="4">Total</td>
              <td>$37.00</td>
            </tr>
            </tbody>
          </table>


        </div>
        <div className="checkout-right">
          <h2>Delivery Address</h2>
          <form>
            <table><thead>
              <tr>
                <td className="label">Name:</td>
                <td><input type="text" name="name"/></td>
              </tr>
              <tr>
                <td className="label">Address:</td>
                <td><input type="text" name="address"/></td>
              </tr>
              <tr>
                <td className="label">City:</td>
                <td><input type="text" name="city"/></td>
              </tr>
              <tr>
                <td className="label">District:</td>
                <td><input type="text" name="district"/></td>
              </tr>
              <tr>
                <td className="label">Phone:</td>
                <td><input type="text" name="phone"/></td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button type="submit">Place Order</button>
                </td>
              </tr></thead>
            </table>



          </form>

        </div>
      </div>
    </div>
    <Footer />

    </>

  );
}

export default Checkout;
