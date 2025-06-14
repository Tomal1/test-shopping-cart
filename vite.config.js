import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/test-shopping-cart",

  // this is used to get around COR issue
  server:{
    proxy:{
      "/api": "http://localhost:3001"
    }
  }
})
