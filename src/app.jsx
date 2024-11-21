// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your visualization components
const FormatPreferences = React.lazy(() => import('./components/FormatPreferences'));
const ComponentEffectiveness = React.lazy(() => import('./components/ComponentEffectiveness'));
const ComponentClarity = React.lazy(() => import('./components/ComponentClarity'));
const ComponentQuality = React.lazy(() => import('./components/ComponentQuality'));
// ... import other components

const App = () => {
  const baseUrl = '/Capital-TheOther-Playtest';
  
  return (
    <Router basename={baseUrl}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Playtest Data Visualizations</h1>
        
        <Routes>
          <Route path="/" element={
            <div>
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Game Format and Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/format-preferences" className="p-4 border rounded hover:bg-gray-50">
                    Format Preferences
                  </Link>
                  <Link to="/component-effectiveness" className="p-4 border rounded hover:bg-gray-50">
                    Component Effectiveness
                  </Link>
                  <Link to="/component-clarity" className="p-4 border rounded hover:bg-gray-50">
                    Component Clarity
                  </Link>
                  <Link to="/component-quality" className="p-4 border rounded hover:bg-gray-50">
                    Component Quality
                  </Link>
                </div>
              </section>

              {/* Add other sections similarly */}
            </div>
          } />

          <Route path="/format-preferences" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <FormatPreferences />
            </React.Suspense>
          } />
          <Route path="/component-effectiveness" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <ComponentEffectiveness />
            </React.Suspense>
          } />
          {/* Add other routes */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;