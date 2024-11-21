import React from 'react';
import { HashRouter } from 'react-router-dom';


const App = () => {
  return (
    <div className="w-full min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-primary mb-8">
        Playtest Data Visualizations
      </h1>
      
      {/* Category 1: Game Format and Components */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Game Format and Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/html/format-preferences.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Format Preferences
          </a>
          <a href="/html/component-effectiveness.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Component Effectiveness
          </a>
          <a href="/html/component-clarity.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Component Clarity
          </a>
          <a href="/html/component-quality.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Component Quality
          </a>
        </div>
      </div>

      {/* Category 2: Learning Assessment */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Learning Assessment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/html/baseline-knowledge.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Baseline Knowledge
          </a>
          <a href="/html/learning-progression.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Learning Progression
          </a>
          <a href="/html/concept-understanding.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Concept Understanding
          </a>
          <a href="/html/knowledge-confidence.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Knowledge Confidence
          </a>
        </div>
      </div>

      {/* Category 3: Engagement and Player Experience */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Engagement and Player Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/html/engaging-aspects.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Engaging Aspects
          </a>
          <a href="/html/player-interaction-patterns.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Player Interaction Patterns
          </a>
          <a href="/html/game-experience-ratings.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Game Experience Ratings
          </a>
          <a href="/html/engagement-progression.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Engagement Progression
          </a>
        </div>
      </div>

      {/* Category 4: Demographics and Background */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Demographics and Background</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/html/demographics-overview.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Demographics Overview
          </a>
          <a href="/html/academic-background.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Academic Background
          </a>
          <a href="/html/gaming-experience.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Gaming Experience
          </a>
          <a href="/html/participant-background.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Participant Background
          </a>
        </div>
      </div>

      {/* Category 5: Implementation and Recommendations */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Implementation and Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/html/recommended-venues.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Recommended Venues
          </a>
          <a href="/html/implementation-suggestions.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Implementation Suggestions
          </a>
          <a href="/html/improvement-areas.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Improvement Areas
          </a>
        </div>
      </div>

      {/* Category 6: Game Mechanics and Dynamics */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Game Mechanics and Dynamics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/html/mechanics-effectiveness.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Mechanics Effectiveness
          </a>
          <a href="/html/player-decision-patterns.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Player Decision Patterns
          </a>
          <a href="/html/capital-system-analysis.html" className="p-4 border rounded hover:shadow-lg transition-shadow">
            Capital System Analysis
          </a>
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);


export default App;