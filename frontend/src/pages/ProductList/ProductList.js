import React from 'react'
import './productList.css'


export default function ProductList() {

  return (
    <div className='middle2'>
        <h1>Product List</h1>
        <table >
         <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Details</th>
            <th>Unsold</th>
            <th>Sold</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
         </thead>
         <tbody className='tbody'>
            <tr >
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><button className="button">Edit</button></td>
            <td><button className="button">Delete</button></td>
            </tr>  
         </tbody>
        </table>
    </div>
    
  )
}
