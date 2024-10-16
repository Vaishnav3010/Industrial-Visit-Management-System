import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './TeacherPage.css'; 
import './Contact'; // Custom CSS for additional styles

const Teacher = ({ availableDates }) => {
  const [collegeName, setCollegeName] = useState('');
  const [collegeAddress, setCollegeAddress] = useState('');
  const [city, setCity] = useState('');
  const [numStudents, setNumStudents] = useState('');
  const [numTeachers, setNumTeachers] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  const handleScheduleVisit = (e) => {
    e.preventDefault();
    const visitDetails = {
      collegeName,
      collegeAddress,
      city,
      numStudents,
      numTeachers,
      selectedDate,
    };
    console.log('Scheduling visit with details:', visitDetails);
    alert('Visit scheduled successfully!');
    setCollegeName('');
    setCollegeAddress('');
    setCity('');
    setNumStudents('');
    setNumTeachers('');
    setSelectedDate(null);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    alert('Feedback submitted successfully!');
    setFeedback('');
  };

  const isDateAvailable = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    return availableDates.includes(formattedDate);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  

  return (
    <div className="teacher-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Teacher Dashboard</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#schedule-visit">Schedule Visit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#view-visits">View Visits</a>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" >Contact</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={handleLogout}>Log Out</button>
            </li>
          </ul>
        </div>
      </nav>

    


      <div className="container mt-5">
        <div id="schedule-visit" className="mb-5">
          <div className="card bg-light p-3">
            <h2>Schedule a Visit</h2>
            <form onSubmit={handleScheduleVisit}>
              {/* Form fields */}
              <div className="form-group mb-3">
                <label>College Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label>College Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={collegeAddress}
                  onChange={(e) => setCollegeAddress(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label>Number of Students</label>
                <input
                  type="number"
                  className="form-control"
                  value={numStudents}
                  onChange={(e) => setNumStudents(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label>Number of Teachers</label>
                <input
                  type="number"
                  className="form-control"
                  value={numTeachers}
                  onChange={(e) => setNumTeachers(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label>Select Visit Date</label>
                <DatePicker
                  className="form-control"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  filterDate={isDateAvailable}
                  placeholderText="Select an available date"
                  required
                />
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary btn-sm mx-2">Schedule Visit</button>
              </div>
            </form>
          </div>
        </div>

        <div id="view-visits" className="mb-5">
          <div className="card bg-light p-3">
            <h2>View Visits</h2>
            <p>No visits to show.</p>
          </div>
        </div>

        <div id="feedback" className="mb-5">
          <div className="card bg-light p-3">
            <h2>Feedback</h2>
            <form onSubmit={handleFeedbackSubmit}>
              <div className="form-group mb-3">
                <label>Your Feedback</label>
                <textarea
                  className="form-control"
                  rows="4"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                />
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary btn-sm mx-2">Submit Feedback</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h5>ABOUT</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="/contact-us"
                    style={{ color: 'white', textDecoration: 'none' }}
                    className="social-link"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us"
                    style={{ color: 'white', textDecoration: 'none' }}
                    className="social-link"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    style={{ color: 'white', textDecoration: 'none' }}
                    className="social-link"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/press"
                    style={{ color: 'white', textDecoration: 'none' }}
                    className="social-link"
                  >
                    Press
                  </a>
                </li>
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
                <li> 
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    YouTube
                  </a>
                </li>
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

export default Teacher;
