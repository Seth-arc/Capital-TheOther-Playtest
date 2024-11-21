import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ComponentEffectiveness = () => {
  const effectivenessData = [
    {
      component: 'Turn Structure',
      'Very effective': 3,
      'Somewhat effective': 2
    },
    {
      component: 'Capital Cards',
      'Very effective': 5,
      'Somewhat effective': 0
    },
    {
      component: 'Event Cards',
      'Very effective': 4,
      'Somewhat effective': 1
    },
    {
      component: 'Board Layout',
      'Very effective': 0,
      'Somewhat effective': 5
    },
    {
      component: 'Profile Sheets',
      'Very effective': 3,
      'Somewhat effective': 2
    }
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Component Effectiveness</h2>
        <div className="w-full h-[500px]">
          <ResponsiveContainer>
            <BarChart
              data={effectivenessData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 150, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="component" type="category" />
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
              <Legend />
              <Bar dataKey="Very effective" fill="#026447" />
              <Bar dataKey="Somewhat effective" fill="#2A9D8F" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ComponentEffectiveness;