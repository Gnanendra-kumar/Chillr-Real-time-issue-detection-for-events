import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FeedbackList from './components/FeedbackList';
import SentimentChart from './components/SentimentChart';
import AlertsPanel from './components/AlertsPanel';

function App() {
  const [feedback, setFeedback] = useState([]);

  const fetchData = async () => {
    const texts = [
      "The event was great!",
      "The queue is too long",
      "The food was okay"
    ];
    
    const responses = await Promise.all(
      texts.map(async text => {
        const res = await axios.post('http://localhost:8000/analyze', { text });
        return { text, ...res.data };
      })
    );

    setFeedback(responses);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const positive = feedback.filter(f => f.label === "POSITIVE").length;
  const negative = feedback.filter(f => f.label === "NEGATIVE").length;
  const neutral = feedback.filter(f => f.label === "NEUTRAL").length;

  return (
    <div className="App">
      <h1>Live Sentiment Dashboard</h1>
      <SentimentChart positive={positive} negative={negative} neutral={neutral} />
      <AlertsPanel feedbackList={feedback} />
      <FeedbackList feedback={feedback} />
    </div>
  );
}

export default App;
