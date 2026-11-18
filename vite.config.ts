import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Required for GitHub Project Pages: https://haidarrra.github.io/ptspae-website/
  base: '/ptspae-website/',
  plugins: [react(), tailwindcss()],
})
