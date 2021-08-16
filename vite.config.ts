import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import styleImport from 'vite-plugin-style-import';
import legacy from '@vitejs/plugin-legacy'; // 旧浏览器支持
import path from 'path';


export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 9527,
    open: true,
    proxy: {
      '/api': {
        target: 'http://lixinmiao.com:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: path.join(__dirname, './src/')
      }
    ]
  },
  plugins: [
    reactRefresh(),
    styleImport({
      libs: [
        {
          libraryName: 'zarm',
          esModule: true,
          resolveStyle: (name) => {
            return `zarm/es/${name}/style/css.js`;
          },
        },
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index.css`;
          },
        },
      ]
    }),
    legacy({
      targets: ['Android >= 39', 'Chrome >= 39', 'Safari >= 10.1', 'iOS >= 10', '> 0.2%'],
      polyfills: ['es.promise', 'regenerator-runtime']
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
})
