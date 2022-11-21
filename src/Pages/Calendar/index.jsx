import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.scss';

function CalendarApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="Calendar">
      <header>
        <h1>Reserve your dates!</h1>
      </header>
      <div className="Calendar__container">
        <main className="Calendar__container__content">
          <Calendar onChange={onChange} showWeekNumbers value={value} />
        </main>
      </div>
    </div>
  );
}

export default CalendarApp;