import React, { useEffect, useState } from 'react';
import api from '../services/api';
import auth from '../services/auth';

export default function Resumes({ user }) {
  const [resumes, setResumes] = useState([]);
  const token = auth.getToken();

  useEffect(() => {
    (async () => {
      const data = await api.get('/resumes', token);
      setResumes(data || []);
    })();
  }, []);

  const create = async () => {
    const r = await api.post('/resumes', { title: 'Untitled', data: {} }, token);
    setResumes(prev => [r, ...prev]);
  };

  return (
    <div>
      <h2>Resumes</h2>
      <button onClick={create}>Create resume</button>
      <ul>
        {resumes.map(r => (
          <li key={r._id}>{r.title}</li>
        ))}
      </ul>
    </div>
  );
}
