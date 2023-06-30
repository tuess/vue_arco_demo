import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/base': {
        target: 'http://10.0.0.249:9203',
        changeOrigin: true,
        rewrite: (path) => {
          const reg = new RegExp("^\\" + '/base')
          return path.replace(reg, "")
        },
      },
    }
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
