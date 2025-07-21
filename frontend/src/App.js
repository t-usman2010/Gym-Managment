// src/App.js
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState('home'); // home, login, profile

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    setPage('profile');
  };

  const handleLogout = () => {
    setUser(null);
    setPage('home');
  };

  return (
    <>
      {page === 'home' && <HomePage onLoginClick={() => setPage('login')} />}
      {page === 'login' && <LoginPage onLogin={handleLogin} />}
      {page === 'profile' && user && <ProfilePage user={user} onLogout={handleLogout} />}
    </>
  );
}

export default App;
