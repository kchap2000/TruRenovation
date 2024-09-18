import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/TruRenovation/',
  root: './',  // Ensures Vite looks at the root directory for index.html
  server: {
    host: '0.0.0.0',
  }
})
