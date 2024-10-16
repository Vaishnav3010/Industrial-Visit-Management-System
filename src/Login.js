import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // This will contain custom CSS for the design

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });

    try {
      let role;

      // Hardcoding the Admin and Industry Representative credentials
      if (email === 'admin123@gmail.com' && password === 'Admin') {
        role = 'Admin';
      } else if (email === 'industryrep123@gmail.com' && password === 'Industry') {
        role = 'IndustryRep';
      } else {
        // For other users, make the API request
        const response = await axios.post('http://localhost:5000/login', { email, password });
        role = response.data.role;

        // Save the token
        const { token } = response.data;
        localStorage.setItem('token', token);
      }

      // Redirect based on role
      if (role === 'Admin') {
        console.log('Navigating to /admin');
        navigate('/admin');
      } else if (role === 'Teacher') {
        console.log('Navigating to /teacher');
        navigate('/teacher');
      } else if (role === 'IndustryRep') {
        console.log('Navigating to /industry-rep');
        navigate('/industry-rep');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="login-card">
        <h2 className="text-center">Sign In</h2>
        <p className="text-center">Welcome back, you've been missed!</p>
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <input 
              type="email" 
              className="form-control" 
              placeholder="Your Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group mb-3">
            <input 
              type="password" 
              className="form-control" 
              placeholder="Create Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input 
                type="checkbox" 
                className="form-check-input" 
                id="rememberMe" 
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember Me
              </label>
            </div>
            <button 
  className="btn btn-link p-0 text-decoration-none forgot-password-link" 
  type="button" 
  onClick={() => navigate('/forgot-password')}
>
  Forgot Password?
</button>
          </div>
          <button type="submit" className="btn btn-primary btn-block w-100 mt-3">Sign In</button>
        </form>
        <div className="mt-3 text-center">
        <button 
  className="btn btn-link p-0 text-decoration-none" 
  type="button" 
  onClick={() => navigate('/register')}
>
  Don’t Have an Account? Sign Up
</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
