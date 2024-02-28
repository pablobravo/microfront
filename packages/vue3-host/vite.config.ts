import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
  plugins: [
    vue(),
    federation({
      name: 'layout',
      filename: 'remoteEntry.js',
      remotes: {
        reactMicrofront: 'http://localhost:5001/assets/remoteEntry.js',
        vueMicrofront: 'http://localhost:5002/assets/remoteEntry.js',
        vue2Microfront: 'http://localhost:5003/assets/remoteEntry.js'
      }
    })
  ],
  build: {
    minify: true,
    target: 'esnext'
  }
})
