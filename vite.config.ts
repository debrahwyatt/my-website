import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/my-website/docs/', 
  build: {
    outDir: 'docs'
  }
});
