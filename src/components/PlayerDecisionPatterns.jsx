import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const PlayerDecisionPatterns = () => {
  const decisionData = [
    {
      type: "Capital Investment",
      frequency: 90,
      impact: 85
    },
    {
      type: "Resource Trading",
      frequency: 75,
      impact: 80
    },
    {
      type: "Role-Play Choices",
      frequency: 85,
      impact: 90
    },
    {
      type: "Strategy Adaptation",
      frequency: 80,
      impact: 85
    },
    {
      type: "Collaboration",
      frequency: 95,
      impact: 90
    }
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Player Decision Making Patterns</h2>
        <div className="w-full h-[500px]">
          <ResponsiveContainer>
            <RadarChart outerRadius={150} data={decisionData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="type" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar 
                name="Decision Frequency" 
                dataKey="frequency" 
                stroke="#026447" 
                fill="#026447" 
                fillOpacity={0.6} 
              />
              <Radar 
                name="Decision Impact" 
                dataKey="impact" 
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

export default PlayerDecisionPatterns;