import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LearningProgression = () => {
  const progressionData = [
    {
      concept: 'Financial Capital',
      before: 4.0,
      after: 5.0
    },
    {
      concept: 'Social Capital',
      before: 3.8,
      after: 4.8
    },
    {
      concept: 'Cultural Capital',
      before: 3.0,
      after: 4.5
    },
    {
      concept: 'Human Capital',
      before: 3.5,
      after: 4.7
    },
    {
      concept: 'Intersectionality',
      before: 3.7,
      after: 4.6
    },
    {
      concept: 'Systemic Bias',
      before: 4.0,
      after: 4.8
    }
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Learning Progression</h2>
        <div className="w-full h-[500px]">
          <ResponsiveContainer>
            <LineChart
              data={progressionData}
              margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="concept" 
                angle={-45} 
                textAnchor="end"
                height={80}
              />
              <YAxis domain={[0, 5]} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="before" 
                stroke="#2A9D8F" 
                strokeWidth={2}
                name="Before Game"
              />
              <Line 
                type="monotone" 
                dataKey="after" 
                stroke="#026447" 
                strokeWidth={2}
                name="After Game"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default LearningProgression;