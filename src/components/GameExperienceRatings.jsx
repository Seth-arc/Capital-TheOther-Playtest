import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GameExperienceRatings = () => {
  const experienceData = [
    {
      aspect: 'Overall Engagement',
      'Very High': 4,
      'High': 1,
      'Moderate': 0
    },
    {
      aspect: 'Learning Value',
      'Very High': 3,
      'High': 2,
      'Moderate': 0
    },
    {
      aspect: 'Game Mechanics',
      'Very High': 2,
      'High': 3,
      'Moderate': 0
    },
    {
      aspect: 'Player Interaction',
      'Very High': 4,
      'High': 1,
      'Moderate': 0
    },
    {
      aspect: 'Educational Impact',
      'Very High': 3,
      'High': 2,
      'Moderate': 0
    }
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Game Experience Ratings</h2>
        <div className="w-full h-[500px]">
          <ResponsiveContainer>
            <BarChart
              data={experienceData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 150, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="aspect" type="category" />
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
              <Legend />
              <Bar dataKey="Very High" fill="#026447" />
              <Bar dataKey="High" fill="#2A9D8F" />
              <Bar dataKey="Moderate" fill="#8ECABC" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default GameExperienceRatings;