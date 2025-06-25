import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/manufy/", // usa il nome della repo
  plugins: [react()],
})
