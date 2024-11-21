import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AcademicBackground = () => {
  const academicData = [
    {
      major: 'Economics & History',
      count: 1,
      'Additional Subjects': 0
    },
    {
      major: 'Public Policy & History',
      count: 1,
      'Additional Subjects': 0
    },
    {
      major: 'Economics & Theatre',
      count: 1,
      'Additional Subjects': 0
    },
    {
      major: 'Economics',
      count: 1,
      'Additional Subjects': 0
    },
    {
      major: 'Government & Political Science',
      count: 1,
      'Additional Subjects': 0
    }
  ];

  const levelData = [
    {
      level: 'Undergraduate',
      students: 5
    }
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Academic Background</h2>
        <div className="space-y-8">
          {/* Major Distribution */}
          <div className="h-[400px]">
            <h3 className="text-xl font-semibold mb-2 text-center">Major Distribution</h3>
            <ResponsiveContainer>
              <BarChart
                data={academicData}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 200, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="major" type="category" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
                />
                <Legend />
                <Bar dataKey="count" name="Primary Major" fill="#026447" />
                <Bar dataKey="Additional Subjects" fill="#2A9D8F" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Study Level Distribution */}
          <div className="h-[200px]">
            <h3 className="text-xl font-semibold mb-2 text-center">Level of Study</h3>
            <ResponsiveContainer>
              <BarChart
                data={levelData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="level" />
                <YAxis domain={[0, 6]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
                />
                <Bar dataKey="students" fill="#026447" name="Number of Students" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicBackground;