import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const KnowledgeConfidence = () => {
  const confidenceData = [
    {
      area: "Applying Economic Theories",
      'High Confidence': 2,
      'Moderate Confidence': 3,
      'Growing Confidence': 0
    },
    {
      area: "Understanding Real-world Impact",
      'High Confidence': 3,
      'Moderate Confidence': 2,
      'Growing Confidence': 0
    },
    {
      area: "Capital Interactions",
      'High Confidence': 4,
      'Moderate Confidence': 1,
      'Growing Confidence': 0
    },
    {
      area: "Identity Influences",
      'High Confidence': 3,
      'Moderate Confidence': 2,
      'Growing Confidence': 0
    },
    {
      area: "Systems Analysis",
      'High Confidence': 2,
      'Moderate Confidence': 2,
      'Growing Confidence': 1
    }
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Knowledge Application Confidence</h2>
        <div className="w-full h-[500px]">
          <ResponsiveContainer>
            <BarChart
              data={confidenceData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 150, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="area" type="category" />
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
              <Legend />
              <Bar dataKey="High Confidence" fill="#026447" />
              <Bar dataKey="Moderate Confidence" fill="#2A9D8F" />
              <Bar dataKey="Growing Confidence" fill="#8ECABC" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeConfidence;