import React from 'react';
import { Link } from 'react-router-dom';
import '../styl.css';
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Appointment Management System</h1>
      <Link to="/appointments">Manage Appointments</Link>
    </div>
  );
};

export default HomePage;
