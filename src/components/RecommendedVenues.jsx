import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RecommendedVenues = () => {
  const venueData = [
    {
      venue: 'University Courses',
      'Highly Recommended': 5,
      'Recommended': 0,
    },
    {
      venue: 'Professional Development',
      'Highly Recommended': 1,
      'Recommended': 2,
    },
    {
      venue: 'Community Education',
      'Highly Recommended': 4,
      'Recommended': 1,
    },
    {
      venue: 'Personal Learning',
      'Highly Recommended': 4,
      'Recommended': 1,
    }
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Recommended Implementation Venues</h2>
        <div className="w-full h-[500px]">
          <ResponsiveContainer>
            <BarChart
              data={venueData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 150, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="venue" type="category" />
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
              <Legend />
              <Bar dataKey="Highly Recommended" fill="#026447" />
              <Bar dataKey="Recommended" fill="#2A9D8F" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RecommendedVenues;