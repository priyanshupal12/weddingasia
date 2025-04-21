import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
    theme: {
      extend: {
        fontFamily: {
          heading: ['"Playfair Display"', 'serif'],
          description: ['"Open Sans"', 'sans-serif'],
        },
      },
    },
})
