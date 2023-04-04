import React, { useEffect, useState } from 'react';

function PlaceOrderPage() {
  const [itemList, setItemList] = useState([]);

  const itemIds = ["15", "16", "17","17"]; // replace with actual item IDs
  const quantities = [20, 30, 1,5]; // replace with actual quantities

  useEffect(() => {
    const itemList = [];

    itemIds.forEach((itemId, index) => {
      fetch(`http://localhost:8080/api/v1/items/${itemId}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then(data => {
          const item = data; // assume backend returns an object with item details
          itemList.push({
            id: item.itemID,
            name: item.name,
            description: item.description,
            price:item.price,
            quantity: quantities[index],
          });

          // Set the state of itemList only when all requests have been completed
          if (itemList.length === itemIds.length) {
            setItemList(itemList);
          }
        })
        .catch(error => {
          console.error(error);
        });
    });
  }, []);

  // Render itemList here

  const subtotal = itemList.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
  }, 0);

  const total = subtotal; // add tax or shipping cost here if required

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {itemList.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3">Subtotal</td>
            <td>{subtotal}</td>
          </tr>
          <tr>
            <td colSpan="3">Total</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

}

export default PlaceOrderPage;
