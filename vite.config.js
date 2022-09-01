import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [

    vue(),

    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/images/icons')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last' | 'body-first',
      customDomId: '__svg__icons__dom__',
    }),

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
