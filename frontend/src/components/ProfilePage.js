// src/components/ProfilePage.js
import React from 'react';
import './ProfilePage.css';

const ProfilePage = ({ user, onLogout }) => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="avatar">{user.Name[0]}</div>
          <h2>{user.Name}</h2>
          <p className="userid">@{user.UserId}</p>
        </div>
        <div className="profile-details">
          <div><strong>Email:</strong> {user.Email}</div>
          <div><strong>Package:</strong> {user.Package}</div>
          <div><strong>Member Since:</strong> {user.Since}</div>
          <div><strong>MemberShip Started:</strong> {user.Started}</div>
          <div><strong>Member Expire:</strong> {user.Expird}</div>
        </div>
        <button className="button" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default ProfilePage;
