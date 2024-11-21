// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router basename="/Capital-TheOther-Playtest">
      <div className="w-full min-h-screen bg-white p-8">
        <h1 className="text-3xl font-bold text-primary mb-8">
          Playtest Data Visualizations
        </h1>
        
        {/* Category 1: Game Format and Components */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Game Format and Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/format-preferences" className="p-4 border rounded hover:shadow-lg transition-shadow">
              Format Preferences
            </Link>
            <Link to="/component-effectiveness" className="p-4 border rounded hover:shadow-lg transition-shadow">
              Component Effectiveness
            </Link>
            <Link to="/component-clarity" className="p-4 border rounded hover:shadow-lg transition-shadow">
              Component Clarity
            </Link>
            <Link to="/component-quality" className="p-4 border rounded hover:shadow-lg transition-shadow">
              Component Quality
            </Link>
          </div>
        </div>

        {/* Category 2: Learning Assessment */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Learning Assessment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/baseline-knowledge" className="p-4 border rounded hover:shadow-lg transition-shadow">
              Baseline Knowledge
            </Link>
            <Link to="/learning-progression" className="p-4 border rounded hover:shadow-lg transition-shadow">
              Learning Progression
            </Link>
            <Link to="/concept-understanding" className="p-4 border rounded hover:shadow-lg transition-shadow">
              Concept Understanding
            </Link>
            <Link to="/knowledge-confidence" className="p-4 border rounded hover:shadow-lg transition-shadow">
              Knowledge Confidence
            </Link>
          </div>
        </div>

        {/* Add other categories similarly... */}
      </div>
    </Router>
  );
};

export default App;