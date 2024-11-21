import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const DemographicsOverview = () => {
  const ageData = [
    { name: 'Age 17-20', value: 1 },
    { name: 'Age 21-23', value: 4 }
  ];

  const genderData = [
    { name: 'Female', value: 2 },
    { name: 'Male', value: 1 },
    { name: 'Non-Binary', value: 1 }
  ];

  const COLORS = ['#026447', '#2A9D8F', '#8ECABC', '#E9F5F3'];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Demographics Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Age Distribution */}
          <div className="h-[400px]">
            <h3 className="text-xl font-semibold mb-2 text-center">Age Distribution</h3>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={ageData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                >
                  {ageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Gender Distribution */}
          <div className="h-[400px]">
            <h3 className="text-xl font-semibold mb-2 text-center">Gender Distribution</h3>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={genderData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemographicsOverview;