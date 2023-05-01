import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const root = process.cwd()

  return {
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(root, 'src')
        }
      ]
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://www.kirinbdf.com',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    },
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [resolve(root, 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]'
      })
    ]
  }
})
