import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const ImplementationSuggestions = () => {
  const suggestionsData = [
    { name: 'Trial Round Implementation', value: 1 },
    { name: 'Board Navigation Clarity', value: 1 },
    { name: 'Time Markers', value: 2 },
    { name: 'Currency Implementation', value: 1 },
    { name: 'Profile Sheet Timing', value: 1 },
    { name: 'Capital Card Additions', value: 1 }
  ];

  const COLORS = ['#026447', '#2A9D8F', '#8ECABC', '#A3E2D7', '#B8E5DC', '#CEE9E4'];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Implementation Suggestions Distribution</h2>
        <div className="w-full h-[500px] flex flex-col items-center">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={suggestionsData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={180}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
              >
                {suggestionsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ImplementationSuggestions;