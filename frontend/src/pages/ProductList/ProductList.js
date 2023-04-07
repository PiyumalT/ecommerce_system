import React, { useState, useEffect } from 'react';
import './productList.css'


export default function ProductList() {
  const [data, setData] = useState([]); //data is an array of objects
  useEffect(
    ()=>{},[])

  //retrieve data from Spring Boot backend 
  fetch('http://localhost:8080/items')
  .then(response => response.json())
  .then(data => {
    // do something with the data 
    setData(data); 
  });

 //calculate the number of sold items
    let totalSoldItems = 0;

    //retrieve data from order_details table
    fetch('http://localhost:8080/order_details')
    .then(response => response.json())
    .then(orderDetails => {

    orderDetails.forEach(order => {
      totalSoldItems += order.qty;
         });
    });
 
 //edit data
 

 //delete an item from the database
 function handleDelete(id) {
    const confirmed = window.confirm('Are you sure you want to delete this item?');
    if (confirmed) {
    fetch(`http://localhost:8080/items/${id}`, { method: 'DELETE' })
      .then(response => {
        // do something after the item has been deleted
      }); }
   }
  
  return (
    <div className='middle_2'>
        <h1>Product List</h1>
        <table >
         <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Details</th>
            <th>Quantity</th>
            <th>Sold</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
         </thead>
         <tbody className='tbody'>
         {data.map(item => (
            <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.details}</td>
            <td>{item.qty}</td>
            <td>{totalSoldItems}</td>
            <td><button className="button">Edit</button></td>
            <td><button className="button" onClick={() => handleDelete(item.id)}>Delete</button></td>
            </tr> 
             ))} 
         </tbody>
        </table>
    </div>
    
  )
}
