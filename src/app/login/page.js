'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      console.log('Haciendo POST a:', '/api/login/');
      await axios.post('/api/login/', { username: user, password: pass }, { withCredentials: true });
      router.replace('/dashboard');
    } catch (e) {
      setErr(e.response?.data?.detail || e.message);
    }
  };

  return (
    <form onSubmit={submit} style={{ maxWidth: 360, margin: '3rem auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Login</h2>
      <input placeholder="Usuario" value={user} onChange={e => setUser(e.target.value)} required />
      <input type="password" placeholder="Contraseña" value={pass} onChange={e => setPass(e.target.value)} required />
      {err && <p style={{ color: 'red' }}>{err}</p>}
      <button type="submit" style={{ marginTop: 10 }}>Entrar</button>
    </form>
  );
}
