# Playtest Data Visualizations

Interactive data visualizations for playtest survey results, built with React and Recharts. Each visualization can be independently embedded in Google Sites.

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/playtest-viz.git
cd playtest-viz
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📊 Available Visualizations

1. Format Preferences (`/format-preferences.html`)
   - Shows user preferences for different game formats
   - Horizontal bar chart with stacked preferences

2. Component Effectiveness (`/component-effectiveness.html`)
   - Displays effectiveness ratings for game components
   - Vertical bar chart with effectiveness levels

[Additional visualizations listed...]

## 🔧 Development

### Adding a New Visualization

1. Create a new component in `src/components/`
2. Create an entry point in `src/entry-points/`
3. Add an HTML file in `/html`
4. Update `vite.config.js` with the new entry point

Example:
```jsx
// src/components/NewVisualization.jsx
import React from 'react';
import { /* ... */ } from 'recharts';

const NewVisualization = () => {
  return (
    // ... component code
  );
};

export default NewVisualization;
```

## 🎨 Styling

- Uses Tailwind CSS for styling
- Primary color: #026447
- Secondary colors: #2A9D8F, #8ECABC

## 📥 Embedding in Google Sites

1. Build the project: `npm run build`
2. Deploy to GitHub Pages
3. Get the URL for the specific visualization:
   ```
   https://[username].github.io/playtest-viz/[visualization].html
   ```
4. In Google Sites:
   - Click the "+" button
   - Choose "Embed"
   - Paste the visualization URL
   - Adjust size (recommended: width=100%, height=600px)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

MIT License - feel free to use this code for your own projects.

## 🆘 Support

For issues or questions, please open a GitHub issue.
