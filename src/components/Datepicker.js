import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Datepicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Define the date range for custom styles
  const highlightDates = [
    new Date('2023-11-25'),
    new Date('2023-11-26'),
    new Date('2023-11-27'),
    // Add more dates as needed
  ];

  const isHighlighted = date => {
    return highlightDates.some(highlightedDate =>
      new Date(date.toDateString()) - new Date(highlightedDate.toDateString()) === 0
    );
  };

  const customInput = ({ value, onClick }) => (
    <input
      type="text"
      value={value}
      onClick={onClick}
      style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '5px' }}
      readOnly
    />
  );

  return (

    <div>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        highlightDates={highlightDates}
        customInput={customInput}
        filterDate={date => isHighlighted(date)}
      />
      <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        highlightDates={highlightDates}
        customInput={customInput}
        filterDate={date => isHighlighted(date)}
      />

      <p>dwqed</p>
    </div>
    
  
  );
};

export default Datepicker;
