import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Auth, { Login, Register } from './pages/Auth.jsx';
import LandingPage from './pages/LandingPage.jsx';
import { Dashboard } from './pages/Dashboard.jsx';

const App = () => {
  const [user, setUser] = useState(null);

  const handleAuth = (u) => setUser(u);

  const logout = () => {
    auth.clearToken();
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/dashboard" element={ <Dashboard/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App