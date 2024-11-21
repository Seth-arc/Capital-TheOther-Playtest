import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // Main entry
        main: './index.html',
        
        // Category 1: Game Format and Components
        formatPreferences: './html/format-preferences.html',
        componentEffectiveness: './html/component-effectiveness.html',
        componentClarity: './html/component-clarity.html',
        componentQuality: './html/component-quality.html',
        
        // Category 2: Learning Assessment
        baselineKnowledge: './html/baseline-knowledge.html',
        learningProgression: './html/learning-progression.html',
        conceptUnderstanding: './html/concept-understanding.html',
        knowledgeConfidence: './html/knowledge-confidence.html',

        // Category 3: Engagement and Player Experience
        engagingAspects: './html/engaging-aspects.html',
        playerInteractionPatterns: './html/player-interaction-patterns.html',
        gameExperienceRatings: './html/game-experience-ratings.html',
        engagementProgression: './html/engagement-progression.html',

        // Category 4: Demographics and Background
        demographicsOverview: './html/demographics-overview.html',
        academicBackground: './html/academic-background.html',
        gamingExperience: './html/gaming-experience.html',
        participantBackground: './html/participant-background.html',

        // Category 5: Implementation and Recommendations
        recommendedVenues: './html/recommended-venues.html',
        implementationSuggestions: './html/implementation-suggestions.html',
        improvementAreas: './html/improvement-areas.html',

        // Category 6: Game Mechanics and Dynamics
        mechanicsEffectiveness: './html/mechanics-effectiveness.html',
        playerDecisionPatterns: './html/player-decision-patterns.html',
        capitalSystemAnalysis: './html/capital-system-analysis.html'
      },
      output: {
        // Ensure unique chunk names
        manualChunks: {
          react: ['react', 'react-dom'],
          recharts: ['recharts']
        }
      }
    },
    // Enable source maps for debugging
    sourcemap: true,
    // Optimize output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Output directory configuration
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  },
  // Ensure proper path resolution for modules
  resolve: {
    alias: {
      '@': '/src'
    },
  },
  // Development server configuration
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  // Optimize dependency handling
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'recharts',
      'lodash'
    ]
  },
  // CSS handling
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  }
});