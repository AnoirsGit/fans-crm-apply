// src/pages/Signup.tsx

import React, { useState } from 'react';
import axios from 'axios';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        name,
        email,
        phone,
        password,
      });
      console.log('Signup successful!', response.data);
      // Add your logic for handling successful signup (e.g., show success message)
    } catch (error) {
      console.error('Signup error:', error);
      // Add your logic for handling signup errors (e.g., show error message)
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
