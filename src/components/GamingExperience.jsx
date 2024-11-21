import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const GamingExperience = () => {
  const experienceData = [
    {
      aspect: "Board Games",
      familiarity: 100,
      comfort: 90
    },
    {
      aspect: "Educational Games",
      familiarity: 70,
      comfort: 85
    },
    {
      aspect: "Role-Playing Games",
      familiarity: 80,
      comfort: 75
    },
    {
      aspect: "Strategy Games",
      familiarity: 85,
      comfort: 80
    },
    {
      aspect: "Digital Games",
      familiarity: 90,
      comfort: 85
    }
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Gaming Experience Profile</h2>
        <div className="w-full h-[500px]">
          <ResponsiveContainer>
            <RadarChart outerRadius={150} data={experienceData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="aspect" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar 
                name="Familiarity" 
                dataKey="familiarity" 
                stroke="#026447" 
                fill="#026447" 
                fillOpacity={0.6} 
              />
              <Radar 
                name="Comfort Level" 
                dataKey="comfort" 
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

export default GamingExperience;