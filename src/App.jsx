import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Example visualization component
const VisualizationPlaceholder = ({ title }) => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p>Visualization content for {title} will be displayed here.</p>
    <Link to="/" className="mt-4 inline-block text-blue-600 hover:text-blue-800">
      ← Back to Dashboard
    </Link>
  </div>
);

const App = () => {
  return (
    <Router basename="/Capital-TheOther-Playtest">
      <div className="w-full min-h-screen bg-white">
        <Routes>
          {/* Home/Dashboard Route */}
          <Route path="/" element={
            <div className="p-8">
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

              {/* Other categories... */}
            </div>
          } />

          {/* Individual Visualization Routes */}
          <Route path="/format-preferences" element={<VisualizationPlaceholder title="Format Preferences" />} />
          <Route path="/component-effectiveness" element={<VisualizationPlaceholder title="Component Effectiveness" />} />
          <Route path="/component-clarity" element={<VisualizationPlaceholder title="Component Clarity" />} />
          <Route path="/component-quality" element={<VisualizationPlaceholder title="Component Quality" />} />
          
          {/* Add routes for other visualizations */}
          {/* 404 Route */}
          <Route path="*" element={
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
              <p className="mb-4">The page you're looking for doesn't exist.</p>
              <Link to="/" className="text-blue-600 hover:text-blue-800">
                ← Return to Dashboard
              </Link>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;