import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BaselineKnowledge = () => {
  const baselineData = [
    {
      concept: 'Financial Capital',
      'Strong Understanding': 0,
      'Good Understanding': 5,
      'Moderate Understanding': 0
    },
    {
      concept: 'Social Capital',
      'Strong Understanding': 1,
      'Good Understanding': 4,
      'Moderate Understanding': 0
    },
    {
      concept: 'Cultural Capital',
      'Strong Understanding': 0,
      'Good Understanding': 0,
      'Moderate Understanding': 5
    },
    {
      concept: 'Human Capital',
      'Strong Understanding': 2,
      'Good Understanding': 2,
      'Moderate Understanding': 1
    },
    {
      concept: 'Intersectionality',
      'Strong Understanding': 2,
      'Good Understanding': 3,
      'Moderate Understanding': 0
    },
    {
      concept: 'Systemic Bias',
      'Strong Understanding': 3,
      'Good Understanding': 2,
      'Moderate Understanding': 0
    }
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Baseline Knowledge Assessment</h2>
        <div className="w-full h-[500px]">
          <ResponsiveContainer>
            <BarChart
              data={baselineData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 150, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="concept" type="category" />
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
              <Legend />
              <Bar dataKey="Strong Understanding" fill="#026447" />
              <Bar dataKey="Good Understanding" fill="#2A9D8F" />
              <Bar dataKey="Moderate Understanding" fill="#8ECABC" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BaselineKnowledge;