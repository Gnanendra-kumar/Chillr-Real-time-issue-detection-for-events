import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5050/feedback')
            .then(response => setFeedback(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Live Feedback</h2>
            <ul>
                {feedback.map((item, index) => (
                    <li key={index}>{item.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
