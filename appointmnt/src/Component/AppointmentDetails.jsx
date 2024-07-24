import React from 'react';

const AppointmentDetails = ({ appointment }) => {
  if (!appointment) return <div>Select an appointment to see details</div>;

  return (
    <div>
      <h2>Appointment Details</h2>
      <p>Name: {appointment.name}</p>
      <p>Date: {appointment.date}</p>
      <p>Time: {appointment.time}</p>
    </div>
  );
};

export default AppointmentDetails;
