import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: './',  // This makes sure Vite looks at the root directory
  plugins: [react()],
  base: '/',
  server: {
    host: '0.0.0.0',
  }
})
