import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Auth, { Login, Register } from './pages/Auth.jsx';
import Resumes from './pages/Resumes.jsx';
import auth from './services/auth';
import LandingPage from './pages/LandingPage.jsx';

const App = () => {
  const [user, setUser] = useState(null);

  const handleAuth = (u) => setUser(u);

  const logout = () => {
    auth.clearToken();
    setUser(null);
  };

  return (
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  )
}

export default App