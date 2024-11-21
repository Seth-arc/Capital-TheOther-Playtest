import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FormatPreferences = () => {
  const formatData = [
    {
      format: 'Physical Board Game',
      'Very Interested': 5,
      'Somewhat Interested': 0,
      'Not Interested': 0
    },
    {
      format: 'Digital Browser Game',
      'Very Interested': 1,
      'Somewhat Interested': 3,
      'Not Interested': 1
    },
    {
      format: 'Virtual Reality Experience',
      'Very Interested': 0,
      'Somewhat Interested': 2,
      'Not Interested': 3
    },
    {
      format: 'Mobile App Version',
      'Very Interested': 1,
      'Somewhat Interested': 2,
      'Not Interested': 2
    }
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Game Format Preferences</h2>
        <div className="w-full h-[500px]">
          <ResponsiveContainer>
            <BarChart
              data={formatData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 150, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="format" type="category" />
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
              <Legend />
              <Bar dataKey="Very Interested" fill="#026447" />
              <Bar dataKey="Somewhat Interested" fill="#2A9D8F" />
              <Bar dataKey="Not Interested" fill="#8ECABC" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default FormatPreferences;