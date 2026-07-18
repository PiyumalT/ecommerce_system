import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navabar';

import './EditUserInfo.css';


function UserDetails() {
    const [userInfo, setUserInfo] = useState({
      firstname: 'Unable to load',
      lastname: 'Unable to load',
      email: 'Unable to load',
      password: '',
    });
    const saved_user_id = sessionStorage.getItem('user_id');
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await fetch(`http://localhost:8080/api/v1/user/${saved_user_id}`);
          const data = await response.json();
          setUserInfo({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
          });
        } catch (error) {
          console.error(error);
        }
      };
      fetchUser();
    }, []);

  const [editing, setEditing] = useState(false);
  const [passwordEditing, setPasswordEditing] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEdit = (field) => {
    if (!editing) {
      setEditing(true);
      setPasswordEditing(false);
    }
  };

  const handlePasswordEdit = () => {
    if (!passwordEditing) {
      setPasswordEditing(true);
      setEditing(false);

    }
  };
/*
  const handleSave = () => {
    setEditing(false);
    setPasswordEditing(false);
    // Send updated user information to server
  };*/
  const handleSave = async () => {
    setEditing(false);
    setPasswordEditing(false);
    try{
      const response = await fetch(`http://localhost:8080/api/v1/user/${saved_user_id}`, {
        method: 'PUT', //change to
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      });
      //const result = await response.json();
      if (response.status === 200) {
        alert('User details updated successfully');
        setEditing(false);
      } else if (response.status === 409) {
        alert('Email already exists, please choose a different email');
      } else {
        alert('Error updating user details');
      }
    }
    catch{
        console.log('network Error');
    }
    
  };
  

  const handleCancel = () => {
    setEditing(false);
    setPasswordEditing(false);
    handlePasswordCancel();
    // Reset form fields to original values
  };

  const handlePasswordSave = async () => {
    // Validate old password
    // Validate new password and confirm password match
    if (newPassword !== confirmPassword) {
      alert('New password and confirm password do not match');
      return;
    }
    try {
      const response = await fetch('http://localhost:3003/updatepassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          oldPassword,
          newPassword,
          confirmPassword,

        }),
      });
      if (response.status === 200) {
        alert('Password updated successfully');
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setPasswordEditing(false);
      } else if (response.status === 400) {
        const result = await response.json();
        alert('Old password is incorrect');
      } else {
        alert('Error updating password1');
      }
    } catch (error) {
      console.error(error);
      alert('Error updating password. maybe  Old password is incorrect');
    }
  };
  

  const handlePasswordCancel = () => {
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setPasswordEditing(false);
    // Reset form fields to original values
  };

  const handleChange = (field, value) => {
    setUserInfo({ ...userInfo, [field]: value });
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className="user-details-container">
        <h1 className="user-details-title">User Details</h1>
        <div className="user-details-field">
            <div className="user-details-row">
            <label>First Name:</label>
            <input
                type="text"
                value={userInfo.firstname}
                onChange={(e) => handleChange('firstname', e.target.value)}
                disabled={!editing}
            />
            </div>
            <div className="user-details-row">
            <label>Last Name:</label>
            <input
                type="text"
                value={userInfo.lastname}
                onChange={(e) => handleChange('lastname', e.target.value)}
                disabled={!editing}
            />
            
            </div>
            <div className="user-details-row">
            <label>Email:</label>
            <input
                type="email"
                value={userInfo.email}
                onChange={(e) => handleChange('email', e.target.value)}
                disabled={!editing}
            />
            </div>
            <div className="user-details-row">
            {!editing && (
                <button className="user-details-edit-button" onClick={() => handleEdit('email')}>
                Edit Account Details
                </button>
            )}
            </div>
            {editing && (
            <button className="user-details-save-button" onClick={handleSave}>
                Save Account Info
            </button>
            )}
            <div className="user-details-row2">
            {!passwordEditing ? (
                <button className="user-details-edit-button" onClick={handlePasswordEdit}>
                Change Password
                </button>
            ) : (
                <>
            <div className="user-details-row">
                    <label>Old Password:</label>
                    <input
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    />
            </div>
            <div className="user-details-row">
                    <label>New Password:</label>
                    <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    />
            </div>
                <div className="user-details-row">
                    <label>Confirm Password:</label>
                    <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                
                </>
            )}
            </div>
            {passwordEditing && (
            <button className="user-details-save-button" onClick={handlePasswordSave}>
                Save Password
            </button>
            )}

            {1 && (
            <button className="user-details-cancel-button" onClick={handleCancel}>
                Cancel
            </button>
            )}
        </div>
        </div>

      <Footer />
    </div>
  );
};

export default UserDetails;
