import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/weddingasia/',
  plugins: [
    tailwindcss(),
    react()],
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  theme: {
    extend: {
      fontFamily: {
        baskervville: ['Baskervville', 'serif'],
      },
    },
  },
})
