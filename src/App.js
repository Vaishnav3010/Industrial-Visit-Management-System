// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './';
import Register from './Register';
import Teacher from './Teacher';
import IndustryRep from './IndustryRep';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import Contact from './Contact';



const App = () => {
  const [availableDates, setAvailableDates] = useState([
    '2024-08-05',
    '2024-08-10',
    '2024-08-15',
    '2024-08-20',
    '2024-08-25'
  ]);

  const handleAddAvailableDate = (newDate) => {
    setAvailableDates([...availableDates, newDate]);
  };

  return (
    <Router>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/reset-password/:token" element={<ResetPassword />} />
    <Route path="/register" element={<Register />} />
    <Route path="/teacher" element={<Teacher availableDates={availableDates} />} />
    <Route path="/industry-rep" element={<IndustryRep availableDates={availableDates} onAddDate={handleAddAvailableDate} />} />
    <Route path="/contact" component={Contact} />
  </Routes>
</Router>
  );
};

export default App;
