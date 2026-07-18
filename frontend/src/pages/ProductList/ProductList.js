import React, { useState, useEffect } from 'react';
import './productList.css'
import { Link } from 'react-router-dom';


export default function ProductList() {
  const [data, setData] = useState([]); //data is an array of objects
  useEffect(
    ()=>{},[])
  

  //retrieve data from Spring Boot backend 
  fetch('http://localhost:8080/api/v1/items')
  .then(response => response.json())
  .then(data => {
    // do something with the data 
    setData(data); 
  });

 
 
 //edit data
 

 //delete an item from the database
 function handleDelete(id) {
    const confirmed = window.confirm('Are you sure you want to delete this item?');
    if (confirmed) {
    fetch(`http://localhost:8080/api/v1/items/${id}`, { method: 'DELETE' })
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
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
         </thead>
         <tbody className='tbody'>
         {data.map(item => (
            <tr key={item.item_id}>
            <td>{item.item_id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td><button className="button"><Link to="/AddProduct" className='link_1'>Edit</Link></button></td>
            <td><button className="button" onClick={() => handleDelete(item.item_id)}>Delete</button></td>
            </tr> 
             ))} 
         </tbody>
        </table>
    </div>
    
  )

}
