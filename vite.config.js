import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: ['es2015', 'safari11'], // Ensure iOS Safari compatibility
  },
  esbuild: {
    target: 'es2015', // Transpile for older browsers including Safari
  },
  server: {
    host: true, // Expose to network for mobile testing
  },
})
