import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const ImprovementAreas = () => {
  const improvementData = [
    {
      area: "Game Mechanics",
      priority: 80,
      impact: 90
    },
    {
      area: "Learning Integration",
      priority: 75,
      impact: 85
    },
    {
      area: "Component Design",
      priority: 70,
      impact: 75
    },
    {
      area: "Player Interaction",
      priority: 65,
      impact: 80
    },
    {
      area: "Time Management",
      priority: 85,
      impact: 70
    }
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Areas for Improvement</h2>
        <div className="w-full h-[500px]">
          <ResponsiveContainer>
            <RadarChart outerRadius={150} data={improvementData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="area" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar 
                name="Priority Level" 
                dataKey="priority" 
                stroke="#026447" 
                fill="#026447" 
                fillOpacity={0.6} 
              />
              <Radar 
                name="Potential Impact" 
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

export default ImprovementAreas;