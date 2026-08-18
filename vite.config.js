import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages alt yolunda servis edildiği için tabanı repo adına ayarla.
  // Lokal/Dokploy'da kökten servis için VITE_BASE env ile override edilebilir.
  base: process.env.VITE_BASE || '/amiral/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
