import React, { useState } from 'react';
import api from '../services/api';
import auth from '../services/auth';

export function Login({ onAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    const res = await api.post('/auth/login', { email, password });
    if (res.token) {
      auth.saveToken(res.token);
      onAuth(res.user);
    } else {
      alert(res.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={submit}>
      <h2 className='text-red-600'>Login</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
}

export function Register({ onAuth }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    const res = await api.post('/auth/register', { name, email, password });
    if (res.token) {
      auth.saveToken(res.token);
      onAuth(res.user);
    } else {
      alert(res.message || 'Register failed');
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Register</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="name" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="password" type="password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default { Login, Register };
