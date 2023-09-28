import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //TODO:REMOVE THIS LINE, AND CREATE common/shared-components package
    alias: {
      '@/': '/src/',
    },
  },
  plugins: [react()],
})
