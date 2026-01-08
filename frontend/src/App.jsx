import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Auth, { Login, Register } from './pages/Auth.jsx';
import Resumes from './pages/Resumes.jsx';
import auth from './services/auth';

const App = () => {
  const [user, setUser] = useState(null);

  const handleAuth = (u) => setUser(u);

  const logout = () => {
    auth.clearToken();
    setUser(null);
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/resumes">Resumes</Link>
        {user ? <button onClick={logout}>Logout</button> : <Link to="/auth">Login</Link>}
      </nav>
      <Routes>
        <Route path="/" element={<h1>CVXpert</h1>} />
        <Route path="/auth" element={<Auth.Login onAuth={handleAuth} />} />
        <Route path="/register" element={<Auth.Register onAuth={handleAuth} />} />
        <Route path="/resumes" element={<Resumes user={user} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App