import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navabar';
import './Checkout.css';

function Checkout() {
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

  return (
    <>
    <Header />
    <Navbar />
    <div className="checkout">
      
      <div className="checkout-container">
        <div className="checkout-left">
          <h2>Order Summary</h2>
          <table class="checkout-table">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>Item 1</td>
              <td>$10.00</td>
              <td>2</td>
              <td>$20.00</td>
            </tr>
            <tr>
              <td>Item 2</td>
              <td>$15.00</td>
              <td>1</td>
              <td>$15.00</td>
            </tr>
            <tr>
              <td colspan="3">Delivery Charges</td>
              <td>$5.00</td>
            </tr>
            <tr>
              <td colspan="3">Coupon Discount</td>
              <td>-$3.00</td>
            </tr>
            <tr>
              <td colspan="3">Total</td>
              <td>$37.00</td>
            </tr>
          </table>


        </div>
        <div className="checkout-right">
          <h2>Delivery Address</h2>
          <form>
            <table>
              <tr>
                <td class="label">Name:</td>
                <td><input type="text" name="name"/></td>
              </tr>
              <tr>
                <td class="label">Address:</td>
                <td><input type="text" name="address"/></td>
              </tr>
              <tr>
                <td class="label">City:</td>
                <td><input type="text" name="city"/></td>
              </tr>
              <tr>
                <td class="label">District:</td>
                <td><input type="text" name="district"/></td>
              </tr>
              <tr>
                <td class="label">Phone:</td>
                <td><input type="text" name="phone"/></td>
              </tr>
              <tr>
                <td colspan="2">
                  <button type="submit">Place Order</button>
                </td>
              </tr>
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
