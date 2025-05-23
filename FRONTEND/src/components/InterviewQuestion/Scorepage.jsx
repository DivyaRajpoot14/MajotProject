// import React from 'react';
// import ReactApexChart from 'react-apexcharts';
// import { NavLink } from 'react-router-dom';

// function ScorePage() {
//   const levels = ['beginner', 'intermediate', 'advanced'];
//   const levelScores = levels.map(level => parseInt(localStorage.getItem(`score_${level}`)) || 0);
//   const totalScore = parseInt(localStorage.getItem('totalScore')) || 0;

//   const options = {
//     chart: {
//       type: 'area',
//       height: 350,
//       toolbar: { show: false },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: 'smooth',
//     },
//     xaxis: {
//       type: 'datetime',
//       categories: [
//         "2018-09-19T00:00:00.000Z",
//         "2018-09-19T01:30:00.000Z",
//         "2018-09-19T02:30:00.000Z",
//         "2018-09-19T03:30:00.000Z",
//         "2018-09-19T04:30:00.000Z",
//         "2018-09-19T05:30:00.000Z",
//         "2018-09-19T06:30:00.000Z"
//       ],
//     },
//     tooltip: {
//       x: {
//         format: 'dd/MM/yy HH:mm',
//       },
//     },
//     colors: ['#4CAF50', '#F44336'],
//     legend: {
//       position: 'top',
//     },
//   };

//   const series = [
//     {
//       name: 'Your Scores',
//       data: levelScores,
//     },
//     {
//       name: 'Max Possible',
//       data: [10, 10, 10], // adjust based on actual max per level
//     }
//   ];

//   return (
//     <div className="h-[100dvh] bg-gradient-to-br from-blue-500 to-sky-600 flex flex-col items-center justify-center p-4">
//       <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 text-center mt-20">
//         <h2 className="text-2xl font-bold text-blue-700">Your Quiz Score Summary</h2>
//         <p className="text-lg mt-2">Total Score: {totalScore}</p>

//         <div className="mt-6">
//           <ReactApexChart options={options} series={series} type="area" height={350} />
//         </div>

//         <div className="mt-6 space-y-2 text-left">
//           {levels.map((level, idx) => (
//             <p key={level} className="text-gray-700">
//               <span className="font-semibold">{level.toUpperCase()}:</span> {levelScores[idx]} correct answers
//             </p>
//           ))}
//         </div>

//         <NavLink to="/" className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//           Back to Home
//         </NavLink>
//       </div>
//     </div>
//   );
// }

// export default ScorePage;
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ScorePage = () => {
  const [scores, setScores] = useState({
    beginner: 0,
    intermediate: 0,
    advanced: 0,
    cpp: 0,
  });

  const totalPossible = 20; // adjust if each level is out of 5, and there are 4 levels
  const totalScore =
    scores.beginner + scores.intermediate + scores.advanced + scores.cpp;
  const percentage = ((totalScore / totalPossible) * 100).toFixed(2);

  useEffect(() => {
    const beginner = parseInt(localStorage.getItem('score_beginner')) || 0;
    const intermediate = parseInt(localStorage.getItem('score_intermediate')) || 0;
    const advanced = parseInt(localStorage.getItem('score_advanced')) || 0;
    const cpp = parseInt(localStorage.getItem('scoreCpp')) || 0;

    setScores({ beginner, intermediate, advanced, cpp });
  }, []);

  const chartOptions = {
    series: [
      {
        name: 'Quiz Scores',
        data: [
          scores.beginner,
          scores.intermediate,
          scores.advanced,
          scores.cpp,
        ],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: { show: false },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          borderRadius: 6,
          borderRadiusApplication: 'end',
        },
      },
      xaxis: {
        categories: ['Beginner', 'Intermediate', 'Advanced', 'C++'],
        labels: { style: { fontWeight: 600 } },
      },
      yaxis: {
        title: {
          text: 'Score',
          style: { fontWeight: 'bold' },
        },
        max: 5,
      },
      fill: {
        opacity: 1,
        colors: ['#3B82F6'], // Tailwind blue
      },
      tooltip: {
        y: {
          formatter: (val) => `${val} / 5`,
        },
      },
      dataLabels: {
        enabled: true,
      },
      colors: ['#3B82F6'],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl p-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">🎉 Quiz Performance Summary</h2>
        <div className="text-center mb-6">
          <p className="text-xl font-semibold text-gray-700">Total Score: <span className="text-green-600">{totalScore} / {totalPossible}</span></p>
          <p className="text-lg text-gray-600">Percentage: <span className="text-blue-600">{percentage}%</span></p>
        </div>
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default ScorePage;
