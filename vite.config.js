import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // This ensures assets are loaded correctly
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  server: {
    host: '0.0.0.0',  // allow external access
    port: 3000,       // you can change if needed
    allowedHosts: ['promptmanager-docs.elsaifoundry.ai'] // 👈 allow your domain
  }
})