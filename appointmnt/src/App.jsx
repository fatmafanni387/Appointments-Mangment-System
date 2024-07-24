import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import AppointmentsPage from './Pages/AppointmentPage';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<AppointmentsPage/>} />
          <Route path="/appointments" element={AppointmentsPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
