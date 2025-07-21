// src/components/LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = () => {
    fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(data => {
        const found = data.find(item =>
          item?.user?.UserId === userId && item?.user?.Pass === pass
        );
        if (found) {
          onLogin(found.user);
        } else {
          alert('Invalid credentials');
        }
      });
  };

  return (
    <div className="page-wrapper">
      <header className="header">
        🏋️ Gym Management System
      </header>

      <div className="login-container">
        <div className="login-card">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} Islamabad Gym Management
      </footer>
    </div>
  );
};

export default LoginPage;
