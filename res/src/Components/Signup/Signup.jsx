// Signup.js
import React, { useState } from 'react';
import './Signup.css';
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement your signup logic here
    console.log('Signing up with:', email, password);
  };

  return (
    <div className='jiz'>
      <h2>Signup</h2>
      <label>Name: </label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label>Email: </label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Password: </label>
      <input type="password"  onChange={(e) => setPassword(e.target.value)} />
      <br /><br></br>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
