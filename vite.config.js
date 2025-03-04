import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [], // Ensure this is an empty array
    }
  },
  optimizeDeps: {
    include: ['@emailjs/browser']
  }
})
