import React, { useState } from 'react';
import AppointmentForm from '../Component/AppointmntForm';
import AppointmentList from '../Component/AppointmentList';
import '../styl.css';
const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <div>
      <h1>Manage Appointments</h1>
      <AppointmentForm addAppointment={addAppointment} />
      <AppointmentList appointments={appointments} />
    </div>
  );
};

export default AppointmentsPage;
