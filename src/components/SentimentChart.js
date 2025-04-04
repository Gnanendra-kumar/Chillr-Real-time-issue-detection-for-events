import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required elements
ChartJS.register(ArcElement, Tooltip, Legend);

const SentimentChart = ({ positive, negative, neutral }) => {
  const data = {
    labels: ['Positive', 'Negative', 'Neutral'],
    datasets: [{
      data: [positive, negative, neutral],
      backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
    }]
  };

  return <Pie data={data} />;
};

export default SentimentChart;
