import React from 'react'
import './salesList.css';

export default function SalesList() {
  return (
    <div className='middle4'>

     <h1>Sales List</h1>
     <table >
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Option</th>
            <th>Qty</th>
            <th>Date and Time</th>
            <th>Mark ship</th>
            <th>More details</th>
            </tr>
        </thead>
        <tbody className='tbody'>
            <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><button className="button">Mark ship</button></td>
            <td><button className="button">More details</button></td>
            </tr>    
         </tbody>
     </table >
    </div>
  )
}
