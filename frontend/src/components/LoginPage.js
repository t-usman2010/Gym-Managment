// src/components/LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = () => {
    console.log('=== LOGIN ATTEMPT ===');
    
    fetch('http://localhost:3001/members')
      .then(res => res.json())
      .then(data => {
        console.log('Checking credentials...');
        
        const found = data.find(item =>
          item?.user?.UserId === userId && item?.user?.Pass === pass
        );
        
        if (found) {
          console.log('✅ Login successful');
          onLogin(found.user);
        } else {
          console.log('❌ Authentication failed');
          alert('Invalid credentials');
        }
      })
      .catch(error => {
        console.error('Login error:', error);
        alert('Login failed. Please try again.');
      });
  };

  return (
    <div className="page-wrapper">
      <div className="login-layout">
        <div className="login-left">
          <h1>🏋️ Islamabad Gym</h1>
          <p>Welcome to the Islamabad Gym. Please log in to continue.</p>
        </div>

        <div className="login-right">
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
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} Islamabad Gym Management
      </footer>
    </div>
  );
};

export default LoginPage;