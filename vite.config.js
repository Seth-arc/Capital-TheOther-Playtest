// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react(),tailwindcss],
  base: '/Capital-TheOther-Playtest/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        formatPreferences: './html/format-preferences.html',
        componentEffectiveness: './html/component-effectiveness.html',
        componentClarity: './html/component-clarity.html',
        componentQuality: './html/component-quality.html',
        baselineKnowledge: './html/baseline-knowledge.html',
        learningProgression: './html/learning-progression.html',
        conceptUnderstanding: './html/concept-understanding.html',
        knowledgeConfidence: './html/knowledge-confidence.html',
        engagingAspects: './html/engaging-aspects.html',
        playerInteractionPatterns: './html/player-interaction-patterns.html',
        gameExperienceRatings: './html/game-experience-ratings.html',
        engagementProgression: './html/engagement-progression.html',
        demographicsOverview: './html/demographics-overview.html',
        academicBackground: './html/academic-background.html',
        gamingExperience: './html/gaming-experience.html',
        participantBackground: './html/participant-background.html',
        recommendedVenues: './html/recommended-venues.html',
        implementationSuggestions: './html/implementation-suggestions.html',
        improvementAreas: './html/improvement-areas.html',
        mechanicsEffectiveness: './html/mechanics-effectiveness.html',
        playerDecisionPatterns: './html/player-decision-patterns.html',
        capitalSystemAnalysis: './html/capital-system-analysis.html'
      }
    }
  },
  server: {
    historyApiFallback: true,
  }
});