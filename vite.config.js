import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/jewelleryworld/',
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
<<<<<<< HEAD
        baskervville: ['Baskervville', 'serif'],
        // cinzel:['Cinzel'],

=======
        Inter: ['Inter', 'serif'],
>>>>>>> 78ea88d30b5dde8d261fa910a79179fa631beb61
      },
    },
  },
})
