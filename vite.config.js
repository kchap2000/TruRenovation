import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: './', // This makes sure Vite looks at the root directory
  plugins: [react()],
  base: '/TruRenovation/', // This is important for GitHub Pages deployment
  server: {
    host: '0.0.0.0',
  },
})
