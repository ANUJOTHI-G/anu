// Login.js
import React, { useState } from 'react';
import './Login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <div className='jiz'>
      <h2>Login</h2>
      <label>Email: </label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Password: </label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <br />
      <button onClick={handleLogin}><a href='http://localhost:3000/'>Login</a></button>
      <label>Forget password?</label><br />
      <label>Don't have an account?</label>
      <br />
    </div>
  );
};

export default Login;
