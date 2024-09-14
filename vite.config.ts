import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false
  },
  server: {
    port: parseInt(process.env.VITE_PORT) || 3000
  }
})
