import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MechanicsEffectiveness = () => {
  const mechanicsData = [
    {
      mechanic: 'Capital Exchange',
      'Very Effective': 4,
      'Effective': 1
    },
    {
      mechanic: 'Role-Playing Elements',
      'Very Effective': 3,
      'Effective': 2
    },
    {
      mechanic: 'Decision Making',
      'Very Effective': 3,
      'Effective': 2
    },
    {
      mechanic: 'Resource Management',
      'Very Effective': 4,
      'Effective': 1
    },
    {
      mechanic: 'Player Interaction',
      'Very Effective': 5,
      'Effective': 0
    }
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Game Mechanics Effectiveness</h2>
        <div className="w-full h-[500px]">
          <ResponsiveContainer>
            <BarChart
              data={mechanicsData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 150, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="mechanic" type="category" />
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
              <Legend />
              <Bar dataKey="Very Effective" fill="#026447" />
              <Bar dataKey="Effective" fill="#2A9D8F" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MechanicsEffectiveness;