import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;

          if (
            id.includes('/three/') ||
            id.includes('@react-three/fiber') ||
            id.includes('@react-three/drei')
          ) {
            return 'three-vendor';
          }

          if (id.includes('/gsap/')) {
            return 'gsap-vendor';
          }

          if (
            id.includes('/react/') ||
            id.includes('/react-dom/') ||
            id.includes('/scheduler/') ||
            id.includes('/zustand/') ||
            id.includes('/clsx/')
          ) {
            return 'app-vendor';
          }
        },
      },
    },
  },
})
