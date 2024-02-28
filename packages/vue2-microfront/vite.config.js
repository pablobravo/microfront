import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'remote-simple',
      filename: 'remoteEntry.js',
      exposes: {
        './vueSection': './src/components/Section.vue',
        './vue2': './node_modules/vue/dist/vue',
      },
    })
  ],
  build: {
    target: ["chrome89", "edge89", "firefox89", "safari15"],
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        minifyInternalExports: false
      }
    }
  }
})
