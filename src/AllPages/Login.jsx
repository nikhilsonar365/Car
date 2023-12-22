

import React, { useState } from 'react';
import '../componants/Login.css'; 

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validUsername = 'demoUser';
    const validPassword = 'demoPass';

    if (formData.username === validUsername && formData.password === validPassword) {
    
      window.location.href = '/carsinfo';
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Login</button>
        <p className="error-message">{error}</p>
      </form>
      <a href="/signin">
          <button>Sign In</button>
        </a>
    </div>
  );
};

export default Login;
