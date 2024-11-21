import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ComponentClarity = () => {
  const clarityData = [
    {
      component: 'Game board',
      'Very Clear': 1,
      'Clear': 3,
      'Neutral': 1
    },
    {
      component: 'Cards',
      'Very Clear': 2,
      'Clear': 2,
      'Neutral': 1
    },
    {
      component: 'Tokens',
      'Very Clear': 3,
      'Clear': 0,
      'Neutral': 2
    },
    {
      component: 'Profile Sheet',
      'Very Clear': 3,
      'Clear': 2,
      'Neutral': 0
    }
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Component Clarity Ratings</h2>
        <div className="w-full h-[500px]">
          <ResponsiveContainer>
            <BarChart
              data={clarityData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 150, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="component" type="category" />
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
              <Legend />
              <Bar dataKey="Very Clear" fill="#026447" />
              <Bar dataKey="Clear" fill="#2A9D8F" />
              <Bar dataKey="Neutral" fill="#8ECABC" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ComponentClarity;