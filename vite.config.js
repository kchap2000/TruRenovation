import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/TruRenovation/', // Ensure the base path is correct for GitHub Pages
  root: './', // This ensures Vite looks at the root directory for index.html
  server: {
    host: '0.0.0.0',
  },
});
