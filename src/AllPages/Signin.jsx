import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

function Signin() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');

    const handleChange = e => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = e => {
        e.preventDefault();

        if (!formData.email || !formData.password || !formData.confirmPassword) {
            setError('Please fill in all fields.');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
      
        console.log(formData);
        setError('');
        navigate('/history');
    };

    return (
        <div className="App-header">
            <form onSubmit={handleSubmit}>
              <h2>Create New Account</h2>
              <label>
                Email:<br></br>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} required />
              </label>
              <label>
                Password:<br></br>
                <input 
                  type="password" 
                  name="password" 
                  value={formData.password} 
                  onChange={handleChange} required />
              </label>
              <label>
                Confirm Password:<br></br>
                <input 
                  type="password" 
                  name="confirmPassword" 
                  value={formData.confirmPassword} 
                  onChange={handleChange} required />
               </label>
               {error && <p style={{ color: 'red' }}>{error}</p>}
               <button 
                 type="submit" >
                Sign Up</button>
            </form>
            <a href="/"><button>Log IN</button></a>
        </div>
    )
}

export default Signin;