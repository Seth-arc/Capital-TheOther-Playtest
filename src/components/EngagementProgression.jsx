import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EngagementProgression = () => {
  const progressionData = [
    {
      phase: 'Setup',
      engagement: 3.8,
      understanding: 3.2,
      interaction: 3.5
    },
    {
      phase: 'Early Game',
      engagement: 4.2,
      understanding: 3.8,
      interaction: 4.0
    },
    {
      phase: 'Mid Game',
      engagement: 4.5,
      understanding: 4.3,
      interaction: 4.5
    },
    {
      phase: 'Late Game',
      engagement: 4.8,
      understanding: 4.6,
      interaction: 4.7
    },
    {
      phase: 'End Game',
      engagement: 4.9,
      understanding: 4.8,
      interaction: 4.8
    }
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Engagement Progression Through Game</h2>
        <div className="w-full h-[500px]">
          <ResponsiveContainer>
            <LineChart
              data={progressionData}
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
                dataKey="engagement" 
                stroke="#026447" 
                strokeWidth={2}
                name="Player Engagement"
              />
              <Line 
                type="monotone" 
                dataKey="understanding" 
                stroke="#2A9D8F" 
                strokeWidth={2}
                name="Game Understanding"
              />
              <Line 
                type="monotone" 
                dataKey="interaction" 
                stroke="#8ECABC" 
                strokeWidth={2}
                name="Player Interaction"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default EngagementProgression;