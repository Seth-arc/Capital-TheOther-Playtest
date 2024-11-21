import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const ConceptUnderstanding = () => {
  const understandingData = [
    {
      concept: "Identity-Economic Relations",
      understanding: 4.8,
      application: 4.5
    },
    {
      concept: "Types of Capital",
      understanding: 4.9,
      application: 4.7
    },
    {
      concept: "Economic Barriers",
      understanding: 4.6,
      application: 4.4
    },
    {
      concept: "Intersectionality",
      understanding: 4.5,
      application: 4.3
    },
    {
      concept: "Capital Exchange",
      understanding: 4.7,
      application: 4.6
    }
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Concept Understanding vs Application</h2>
        <div className="w-full h-[500px]">
          <ResponsiveContainer>
            <RadarChart outerRadius={150} data={understandingData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="concept" />
              <PolarRadiusAxis angle={30} domain={[0, 5]} />
              <Radar 
                name="Theoretical Understanding" 
                dataKey="understanding" 
                stroke="#026447" 
                fill="#026447" 
                fillOpacity={0.6} 
              />
              <Radar 
                name="Practical Application" 
                dataKey="application" 
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

export default ConceptUnderstanding;