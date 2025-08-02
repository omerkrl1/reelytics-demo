import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setMessage(error.message);
    else setMessage('Kayıt başarılı! Lütfen e-postanı kontrol et.');
  };

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMessage(error.message);
    else setMessage('Giriş başarılı!');
  };

  return (
    <div style={{ maxWidth: 300, margin: 'auto', textAlign: 'center' }}>
      <h2>Kullanıcı Girişi / Kayıt</h2>
      <input
        type="email"
        placeholder="E-posta"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      <button onClick={signUp} style={{ marginRight: 10 }}>Kayıt Ol</button>
      <button onClick={signIn}>Giriş Yap</button>
      <p>{message}</p>
    </div>
  );
}

export default Auth;
