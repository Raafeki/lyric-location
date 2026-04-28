import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-manifest',
      closeBundle() {
        copyFileSync('manifest.json', 'dist/manifest.json')
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        content: resolve(__dirname, 'src/content/index.jsx')
      },
      output: {
        entryFileNames: 'assets/[name].js',
        format: 'iife',
        inlineDynamicImports: true
      }
    }
  }
})