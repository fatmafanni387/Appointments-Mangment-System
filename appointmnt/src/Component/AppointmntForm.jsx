import React, { useState } from 'react';

const AppointmentForm = ({ addAppointment }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date && time) {
      addAppointment({ name, date, time });
      setName('');
      setDate('');
      setTime('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div>
        <label>Time</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </div>
      <button type="submit">Add Appointment</button>
    </form>
  );
};

export default AppointmentForm;
