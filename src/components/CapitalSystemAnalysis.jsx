import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CapitalSystemAnalysis = () => {
  const capitalData = [
    {
      phase: 'Early Game',
      'Financial Capital': 3.5,
      'Social Capital': 3.2,
      'Cultural Capital': 2.8,
      'Human Capital': 3.0
    },
    {
      phase: 'Mid Game',
      'Financial Capital': 3.8,
      'Social Capital': 3.6,
      'Cultural Capital': 3.4,
      'Human Capital': 3.5
    },
    {
      phase: 'Late Game',
      'Financial Capital': 4.2,
      'Social Capital': 4.0,
      'Cultural Capital': 3.8,
      'Human Capital': 4.0
    },
    {
      phase: 'End Game',
      'Financial Capital': 4.5,
      'Social Capital': 4.3,
      'Cultural Capital': 4.1,
      'Human Capital': 4.3
    }
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Capital System Progression Analysis</h2>
        <div className="w-full h-[500px]">
          <ResponsiveContainer>
            <LineChart
              data={capitalData}
              margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="phase" />
              <YAxis domain={[0, 5]} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="Financial Capital" 
                stroke="#026447" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="Social Capital" 
                stroke="#2A9D8F" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="Cultural Capital" 
                stroke="#8ECABC" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="Human Capital" 
                stroke="#A3E2D7" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CapitalSystemAnalysis;