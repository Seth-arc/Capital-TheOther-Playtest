import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const FormatPreferences = () => {
  // Example data - replace with your actual data
  const data = [
    { format: 'Digital', preference: 65 },
    { format: 'Physical', preference: 85 },
    { format: 'Hybrid', preference: 45 },
  ];

  return (
    <div className="p-8">
      <div className="mb-6">
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          ← Back to Dashboard
        </Link>
      </div>

      <h2 className="text-2xl font-bold mb-6">Format Preferences</h2>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <BarChart width={600} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="format" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="preference" fill="#8884d8" />
        </BarChart>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Analysis</h3>
        <p className="text-gray-700">
          This visualization shows player preferences for different game formats.
          Physical format appears to be the most preferred option among players.
        </p>
      </div>
    </div>
  );
};

export default FormatPreferences;