import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        formatPreferences: './format-preferences.html',
        componentEffectiveness: './component-effectiveness.html',
        // Add more entries for each visualization
      },
    },
  },
});
