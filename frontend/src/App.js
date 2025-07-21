import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      {user ? (
        <ProfilePage user={user} onLogout={() => setUser(null)} />
      ) : (
        <LoginPage onLogin={setUser} />
      )}
    </>
  );
}

export default App;
