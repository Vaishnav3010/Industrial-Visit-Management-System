import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import './IndustryRepPage.css';

const IndustryRep = ({ availableDates = [] , onAddDate }) => {
  const [visitRequests, setVisitRequests] = useState([
    {
      id: 1,
      collegeName: 'Example College',
      collegeAddress: '123 Main St',
      city: 'Anytown',
      numStudents: 50,
      numTeachers: 5,
      requestedDate: '2024-08-15',
    },
  ]);
  const [newAvailableDate, setNewAvailableDate] = useState(null);
  const navigate = useNavigate();

  const handleApproveVisit = (id) => {
    alert(`Visit request ${id} approved!`);
    setVisitRequests(visitRequests.filter((request) => request.id !== id));
  };

  const handleRejectVisit = (id) => {
    alert(`Visit request ${id} rejected!`);
    setVisitRequests(visitRequests.filter((request) => request.id !== id));
  };

  const handleAddAvailableDate = (e) => {
    e.preventDefault();
    if (newAvailableDate) {
      const formattedDate = moment(newAvailableDate).format('YYYY-MM-DD');
      onAddDate(formattedDate);
      setNewAvailableDate(null);
      alert('Date added successfully!');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const isDateAvailable = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    // Add a check to make sure availableDates is defined and is an array
    return Array.isArray(availableDates) && availableDates.includes(formattedDate);
  };

  return (
    <div className="industry-rep-page">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Industry Rep Dashboard</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#visit-requests">Visit Requests</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#available-dates">Set Available Dates</a>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={handleLogout}>Log Out</button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-8">
        <div id="visit-requests" className="center-content mb-1">
          <div className="card bg-light p-4">
            <h2 className="mb-8">Visit Requests</h2>
            {visitRequests.length > 0 ? (
              visitRequests.map((request) => (
                <div key={request.id} className="mb-3">
                  <h4>{request.collegeName}</h4>
                  <p>
                    Address: {request.collegeAddress}, {request.city} <br />
                    Students: {request.numStudents}, Teachers: {request.numTeachers} <br />
                    Requested Date: {moment(request.requestedDate).format('MMMM Do YYYY')}
                  </p>
                  <div className="button-group">
                    <button
                      className="btn btn-success mr-2"
                      onClick={() => handleApproveVisit(request.id)}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRejectVisit(request.id)}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No visit requests to show.</p>
            )}
          </div>
        </div>

        <div id="available-dates" className="center-content mb-5">
          <div className="card bg-light p-4">
            <h2 className="mb-4">Set Available Dates</h2>
            <form onSubmit={handleAddAvailableDate}>
              <div className="form-group mb-3">
                <label>Select Date</label>
                <DatePicker
                  className="form-control"
                  selected={newAvailableDate}
                  onChange={(date) => setNewAvailableDate(date)}
                  placeholderText="Select a date"
                  required
                  // Disable dates that are already selected
                  excludeDates={availableDates.map(date => new Date(date))}
                />
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">Add Date</button>
              </div>
            </form>
            <div className="mt-4">
              <h4>Available Dates:</h4>
              <ul>
                {availableDates.length > 0 ? (
                  availableDates.map((date, index) => (
                    <li key={index}>{moment(date).format('MMMM Do YYYY')}</li>
                  ))
                ) : (
                  <p>No available dates to show.</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h5>ABOUT</h5>
              <ul className="list-unstyled">
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div className="col-sm">
              <h5>HELP</h5>
              <ul className="list-unstyled">
                <li>Payments</li>
                <li>Shipping</li>
                <li>Returns</li>
              </ul>
            </div>
            <div className="col-sm">
              <h5>POLICY</h5>
              <ul className="list-unstyled">
                <li>Terms of Use</li>
                <li>Security</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div className="col-sm">
              <h5>SOCIAL</h5>
              <ul className="list-unstyled">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col text-center mt-3">
              <p>&copy; 2024 Teacher Dashboard. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndustryRep;
