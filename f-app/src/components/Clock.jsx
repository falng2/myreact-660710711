import React from 'react';

const Clock = () => {
    // สามารถมี JavaScript logic ก่อน return
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-EN');
    const dateString = now.toLocaleDateString('en-EN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });
    
    // Return JSX
    return (
        <div className="clock">
            <h3>🕐 TIME</h3>
            <p className="date">{dateString}</p>
            <p className="time">{timeString}</p>
        </div>
    );
};

export default Clock;