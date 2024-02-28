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
      name: 'vue-microfront',
      filename: 'remoteEntry.js',
      exposes: {
        './CardModule': './src/modules/card/CardModule.vue'
      }
    })
  ],
  build: {
    minify: true
  }
})
