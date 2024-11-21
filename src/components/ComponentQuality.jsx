import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const ComponentQuality = () => {
  const qualityData = [
    {
      component: "Game board",
      quality: 5, // Excellent = 5
      durability: 4.5
    },
    {
      component: "Cards",
      quality: 4.8,
      durability: 4.2
    },
    {
      component: "Tokens",
      quality: 4.2,
      durability: 4.0
    },
    {
      component: "Profile Sheets",
      quality: 4.5,
      durability: 4.3
    }
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Component Quality Assessment</h2>
        <div className="w-full h-[500px]">
          <ResponsiveContainer>
            <RadarChart outerRadius={150} data={qualityData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="component" />
              <PolarRadiusAxis angle={30} domain={[0, 5]} />
              <Radar 
                name="Quality" 
                dataKey="quality" 
                stroke="#026447" 
                fill="#026447" 
                fillOpacity={0.6} 
              />
              <Radar 
                name="Durability" 
                dataKey="durability" 
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

export default ComponentQuality;