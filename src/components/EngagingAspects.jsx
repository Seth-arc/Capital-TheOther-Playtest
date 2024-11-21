import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EngagingAspects = () => {
  const engagingData = [
    {
      aspect: 'Role-Playing',
      Engaging: 4,
      'Very Engaging': 1
    },
    {
      aspect: 'Player Interaction',
      Engaging: 2,
      'Very Engaging': 3
    },
    {
      aspect: 'Economic Choices',
      Engaging: 3,
      'Very Engaging': 2
    },
    {
      aspect: 'Decision Tracking',
      Engaging: 2,
      'Very Engaging': 1
    },
    {
      aspect: 'Capital Management',
      Engaging: 1,
      'Very Engaging': 4
    }
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Most Engaging Game Aspects</h2>
        <div className="w-full h-[500px]">
          <ResponsiveContainer>
            <BarChart
              data={engagingData}
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
              <Bar dataKey="Very Engaging" fill="#026447" />
              <Bar dataKey="Engaging" fill="#2A9D8F" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default EngagingAspects;