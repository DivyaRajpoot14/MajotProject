import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { NavLink } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ScorePage({ score, totalQuestions }) {
  const data = {
    labels: ['Correct Answers', 'Incorrect Answers'],
    datasets: [
      {
        label: 'Quiz Results',
        data: [score, totalQuestions - score],
        backgroundColor: ['#4CAF50', '#F44336'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Quiz Results',
      },
    },
  };

  return (
    <div className="h-[100dvh] bg-gradient-to-br from-blue-500 to-sky-600 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold">Your Quiz Results</h2>
        <p className="text-lg mt-4">Score: {score} / {totalQuestions}</p>
        <div className="mt-6">
          <Bar data={data} options={options} />
        </div>
        <NavLink to="/" className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Back to Home
        </NavLink>
      </div>
    </div>
  );
}

export default ScorePage;