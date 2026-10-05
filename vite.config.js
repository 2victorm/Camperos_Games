import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Coincide con el nombre del repositorio de GitHub Pages.
  base: '/Camperos_Games/',
});
