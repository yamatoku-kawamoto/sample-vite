import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginGlobInput from '@macropygia/vite-plugin-glob-input'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias:{
      '@src': path.join(__dirname, 'src')
    }
  },
  plugins: [
    vitePluginGlobInput({
      patterns: [
        'src/**/[^_]*.html', // _で始まらないすべてのHTMLファイルを対象に
        'src/**/*.tsx',
        'src/**/*.ts',
      ]
    }),
    react()
  ],
})
