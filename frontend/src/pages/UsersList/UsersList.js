import React from 'react'
import './usersList.css'

export default function UsersList() {

  return (
    <div className='middle3'>
       
    <h1>User List</h1>
    <table >
        <thead>  
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Total Purchases</th>
            <th>Remove User</th>
            </tr>
        </thead>
        <tbody className='tbody'>
            <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><button className="button">Remove User</button></td>
            </tr> 
         </tbody>
    </table >



    </div>
  )
}
