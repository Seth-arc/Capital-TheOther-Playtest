import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const PlayerInteractionPatterns = () => {
  const interactionData = [
    {
      type: "Collaborative Discussion",
      frequency: 95,
      effectiveness: 90
    },
    {
      type: "Strategy Sharing",
      frequency: 85,
      effectiveness: 88
    },
    {
      type: "Resource Trading",
      frequency: 75,
      effectiveness: 82
    },
    {
      type: "Role-Play Dialogue",
      frequency: 80,
      effectiveness: 85
    },
    {
      type: "Problem Solving",
      frequency: 90,
      effectiveness: 92
    },
    {
      type: "Capital Exchange",
      frequency: 85,
      effectiveness: 88
    }
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Player Interaction Patterns</h2>
        <div className="w-full h-[500px]">
          <ResponsiveContainer>
            <RadarChart outerRadius={150} data={interactionData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="type" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar 
                name="Frequency" 
                dataKey="frequency" 
                stroke="#026447" 
                fill="#026447" 
                fillOpacity={0.6} 
              />
              <Radar 
                name="Effectiveness" 
                dataKey="effectiveness" 
                stroke="#2A9D8F" 
                fill="#2A9D8F" 
                fillOpacity={0.6} 
              />
              <Legend />
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PlayerInteractionPatterns;