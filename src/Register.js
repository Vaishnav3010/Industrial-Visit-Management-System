import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [collegeName, setCollegeName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!collegeName || !email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      // Replace with your API endpoint
      const response = await fetch('https://your-backend-api.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ collegeName, email, password }),
      });

      // Handle server response
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      // Optional: Handle the response if needed
      const data = await response.json();
      console.log('Registration successful:', data);

      // Redirect to login after successful registration
      navigate('/');
    } catch (error) {
      console.error('Error during registration:', error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: 'linear-gradient(135deg, #9c27b0, #2196f3)' }}>
      <div className="card p-4" style={{ borderRadius: '20px', width: '100%', maxWidth: '400px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="text-center mb-4" style={{ fontWeight: 'bold' }}>CREATE ACCOUNT</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="College Name"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              required
              style={{ borderRadius: '0', borderBottom: '1px solid #ccc' }}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ borderRadius: '0', borderBottom: '1px solid #ccc' }}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ borderRadius: '0', borderBottom: '1px solid #ccc' }}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Re-type password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{ borderRadius: '0', borderBottom: '1px solid #ccc' }}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block" style={{ background: 'linear-gradient(135deg, #9c27b0, #2196f3)', border: 'none', borderRadius: '30px' }}>SIGN UP</button>
          <div className="mt-3 text-center">
            <button 
              className="btn btn-link" 
              onClick={() => navigate('/')}
            >
              Already have an account? Log in
            </button>
          </div>
          </form>
      </div>
    </div>
  );
};

export default Register;
