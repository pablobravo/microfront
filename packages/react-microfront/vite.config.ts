import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: 'home',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/button/Button.jsx',
        './Card': './src/card/Card.jsx'
      }
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
